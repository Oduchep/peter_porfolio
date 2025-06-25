import React, { ReactNode } from 'react';

const Heading1 = ({ text, icon }: { text: string; icon?: ReactNode }) => {
  return (
    <div className='flex items-center gap-3'>
      <h1 className='text-clamped font-semibold'>{text}</h1>
      <span className='text-2xl'>{icon}</span>
    </div>
  );
};

export default Heading1;
