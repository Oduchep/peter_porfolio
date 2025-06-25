import React, { ReactNode } from 'react';

const Heading2 = ({ text, icon }: { text: string; icon?: ReactNode }) => {
  return (
    <div className="flex gap-2">
      <h2 className="text-clamped font-medium">{text}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default Heading2;
