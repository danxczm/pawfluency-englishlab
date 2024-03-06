import React from 'react';
import Logout from '../components/Logout';

const ClassroomLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <h1 className='text-center text-2xl text-gray-700'>
        ClassroomLayout - make a custom header/navbar for classroom remove global one
        <Logout />
      </h1>
      <main>{children}</main>
    </section>
  );
};

export default ClassroomLayout;
