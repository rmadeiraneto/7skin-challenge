import React from 'react'

const Nav = (props) => {
  return (
    <nav className={`nav${props.extClass ? ' ' + props.extClass : ''}`}>
      {props.children}
    </nav>
  )
}

export default Nav
