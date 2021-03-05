import React from 'react'
import {
  NavLink
} from 'react-router-dom'

const Nav = (props) => {
  const categories = props.categories.map((category, index) =>
    <li key={index}>
      <NavLink to={`/search/${category}`}>{category}</NavLink>
    </li>)

  return (
    <nav className="main-nav">
      <ul>
        {categories}
      </ul>
    </nav>
  )
}

export default Nav
