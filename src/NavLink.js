import React from 'react';
import { Link } from 'react-router';

const NavLink = (props) => {
  return <Link {...props} activeStyle={{ 'background-color': '#e67e22', color: '#eee' }}/>
}

export default NavLink;
