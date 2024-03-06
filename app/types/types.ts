import { SessionOptions } from 'iron-session';

export type SessionData = {
  userId?: string;
  userName?: string;
  profilePicture?: string;
  isStudent?: boolean;
  isBlockedUser?: boolean;
  isLoggedIn: boolean;
};

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionsOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: 'dev-session',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  },
};
