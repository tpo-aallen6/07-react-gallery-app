import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  const search = function (e) {
    props.performSearch(e.target.innerText.toLowerCase())
  }

  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink onClick={search} to="/cats">Cats</NavLink></li>
        <li><NavLink onClick={search} to="/dogs">Dogs</NavLink></li>
        <li><NavLink onClick={search} to="/birds">Birds</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav
