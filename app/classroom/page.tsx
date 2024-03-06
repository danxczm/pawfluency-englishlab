import { redirect } from 'next/navigation';

import { getSession } from '../actions';

const ClassRoomPage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) redirect('/');

  return (
    <main>
      <h1>Your classroom</h1>

      <p>
        Welcome, <b>{session.userName}</b>
      </p>
    </main>
  );
};

export default ClassRoomPage;
