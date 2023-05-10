import React from 'react';

// import data
import { nav } from '../../../data';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex gap-x-8 text-white'>
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <NavLink to={item.href} className='hover:text-primary-200 transition'>
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
