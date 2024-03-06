import Link from 'next/link';

import { getSession } from '../actions';

import Logout from './Logout';

const Navbar = async () => {
  const session = await getSession();

  return (
    <header>
      <nav className='border-gray-200 bg-white px-4 py-4'>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
          <div className='ml-auto flex items-center'>
            <Link
              href='/login'
              className='rounded-lg bg-gray-600 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:scale-110 hover:bg-gray-500 hover:shadow active:scale-100'
            >
              Log in
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
