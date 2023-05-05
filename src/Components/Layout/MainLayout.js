import React from 'react'
import BaseLayout from './BaseLayout'
import Main from './Main'
import Nav from './Nav'
import NavMenu from '../Container/NavMenu/NavMenu'

const MainLayout = (props) => {
  const defaults = {
    className: 'layout',
    extClass: '',
    mainContent: null,
    navContent: NavMenu,
  }

  props = {
    ...defaults,
    ...props,
  }

  return (
    <BaseLayout
      className={`${props.className}${
        props.extClass ? ' ' + props.extClass : ''
      }`}
      main={
        <Main extClass={`${props.className}__main`}>{props.mainContent}</Main>
      }
      nav={
        <Nav extClass={`${props.className}__nav`}>
          {typeof props.navContent === 'function'
            ? props.navContent.call()
            : props.navContent}
        </Nav>
      }
    />
  )
}

export default MainLayout
