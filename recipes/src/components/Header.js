import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderLink = ({ children, ...props }) => (
  <NavLink to="/" className="p1 mx2 black text-decoration-none rounded" activeClassName="bg-white" exact {...props}>
    { children }
  </NavLink>
)

const Header = () => (
  <header className="flex items-center justify-between px4">
    <h1 className="h1">🍽️ React Recipes</h1>
    <nav>
      {/*<NavLink to="/" className="p1 mx2 black text-decoration-none rounded" activeClassName="bg-white" exact>
        Home
      </NavLink>*/}
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favorites">Favorites</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node
}

export default Header;
