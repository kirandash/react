import React from 'react';
import { NavLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { FaPlusSquare } from 'react-icons/fa'
import { FaListAlt } from 'react-icons/fa'
import '../../stylesheets/Menu.scss'

const Menu = () =>
    <nav className="menu">
        <NavLink to="/" activeClassName="selected">
            <FaHome />
        </NavLink>
        <NavLink to="/add-day" activeClassName="selected">
            <FaPlusSquare />
        </NavLink>
        <NavLink to="/list-days" activeClassName="selected">
            <FaListAlt />
        </NavLink>
    </nav>

export default Menu