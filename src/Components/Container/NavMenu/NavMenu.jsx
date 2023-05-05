import React from 'react'
import appInfo from '../../../appInfo.json'
import NavMenuItem from './NavMenuItem'

const NavMenu = () => {
  return (
    <div className="nav-menu">
      {appInfo.menuItems.map((item, i) => (
        <NavMenuItem extClass="nav-menu__item" key={i} isActive={item.active}>
          {/*dummy isActive value*/}
          {item.label}
        </NavMenuItem>
      ))}
    </div>
  )
}

export default NavMenu
