import React from 'react'
import {
  NavLink
} from 'react-router-dom'

const Nav = (props) => {
  // if (location.pathname.startsWith('/search')) {
  //   const query = location.pathname.substring(8)
  //   props.performSearch(query)
  // }

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
