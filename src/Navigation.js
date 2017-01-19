import React from 'react';
import { Link } from 'react-router';

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">
        <li><Link to="/">home</Link></li>
        <li><Link to="/new">new</Link></li>
        <li><Link to="/show">show</Link></li>
        <li><Link to="/ask">ask</Link></li>
        <li><Link to="/jobs">jobs</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
