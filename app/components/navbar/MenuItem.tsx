'use client'

import React from 'react';

interface MenuItemProps {
  onClick: () => void
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({onClick, label}) => (
  <div className={'px-4 py-3 hover:bg-neutral-100 transition font-semibold'}>
    {label}
  </div>
);

export default MenuItem;
