import React, { Component } from 'react';
import '../App.css';

import NavLink from './NavLink'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="Nav-bar">
        <NavLink url="/" text="home" />
        <NavLink url="/items" text="all items" />
        <NavLink url="/items/unverified" text="unverified items" />
        <NavLink url="/items/new" text="add item" />
        <NavLink url="/about" text="about" />
      </nav>
    )
  }
}
