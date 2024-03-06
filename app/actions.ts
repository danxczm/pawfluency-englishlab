'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { getIronSession } from 'iron-session';

import { sessionsOptions, SessionData, defaultSession } from './types/types';

let username = 'qwe@qwe.com';

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionsOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  // ! check the user in DB
  session.isBlockedUser = false;
  session.isStudent = true;

  return session;
};

export const logIn = async (prevState: { error: undefined | string }, formData: FormData) => {
  const session = await getSession();

  const userEmail = formData.get('email') as string;
  const userPassword = formData.get('password') as string;

  //check user in db
  // const user = await db.getUser({userEmail, userPassword})

  if (userEmail !== username) {
    return { error: 'Wrong Credentials!' };
  }

  session.userId = '1';
  session.userName = 'Danillo';
  session.isLoggedIn = true;

  await session.save();
  redirect('/classroom');
};
export const logOut = async () => {
  const session = await getSession();
  session.destroy();
  redirect('/');
};
