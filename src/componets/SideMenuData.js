import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Customer',
    path: '/Customer',
    icon: <AiIcons.AiOutlineSmile />,
    cName: 'nav-text'
  },
  {
    title: 'Corporate',
    path: '/Corporate',
    icon: <MdIcons.MdCorporateFare />,
    cName: 'nav-text'
  },
  {
    title: 'Manager',
    path: '/Manager',
    icon: <GrIcons.GrUserManager />,
    cName: 'nav-text'
  },
];
