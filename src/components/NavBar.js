import React, { Component } from 'react';
import '../App.css';

import NavLink from './NavLink'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="Nav-bar">
        <NavLink id="Nav-first" url="/" text="home" />
        <NavLink id="Nav-second" url="/items" text="all items" />
        <NavLink id="Nav-third" url="/items/unverified" text="unverified items" />
        <NavLink id="Nav-fourth" url="/items/new" text="add item" />
        <NavLink id="Nav-fifth" url="/about" text="about" />
      </nav>
    )
  }
}
