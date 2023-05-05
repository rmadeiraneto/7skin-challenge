const NavMenu = ({ isActive, extClass, children }) => {
  return (
    <div
      className={`nav-menu-item${isActive ? ' nav-menu-item--active' : ''}${
        extClass ? ' ' + extClass : ''
      }`}
    >
      {children}
    </div>
  )
}

export default NavMenu
