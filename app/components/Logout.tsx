import React from 'react';
import { logOut } from '../actions';

const Logout = () => {
  return (
    <form action={logOut}>
      <button className='rounded-lg bg-gray-600 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:scale-110 hover:bg-gray-500 hover:shadow active:scale-100'>
        Logout
      </button>
    </form>
  );
};

export default Logout;
