import React from 'react'
import {
  NavLink
} from 'react-router-dom'

const Nav = (props) => {


  // if (location.pathname.startsWith('/search')) {
  //   const query = location.pathname.substring(8)
  //   props.performSearch(query)
  // }

  const search = function (e) {
    // const query = e.target.innerText.toLowerCase()
    // props.performSearch(query)
  }

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink onClick={search} to="/search/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink onClick={search} to="/search/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink onClick={search} to="/search/birds">Birds</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
