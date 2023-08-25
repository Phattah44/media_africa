import React from 'react';

export default function SidebarOpt({ Icon, text, Active }) {
  return (
    <div className='flex flex-row items-center gap-2'>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}
