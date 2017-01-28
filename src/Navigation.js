import React from 'react';
import NavLink from './NavLink';

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">
        <li><NavLink to="/" onlyActiveOnIndex={true}>home</NavLink></li>
        <li><NavLink to="/new">new</NavLink></li>
        <li><NavLink to="/show">show</NavLink></li>
        <li><NavLink to="/ask">ask</NavLink></li>
        <li><NavLink to="/jobs">jobs</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
