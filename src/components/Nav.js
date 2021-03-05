import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav (props) {
  const listItems = props.categories.map((category, index) =>
    <li key={index}>
      <NavLink to={`/search/${category}`}>{category}</NavLink>
    </li>
  )

  return (
    <nav className='main-nav'>
      <ul>
        {listItems}
      </ul>
    </nav>
  )
}

export default Nav
