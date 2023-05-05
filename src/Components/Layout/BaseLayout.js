import React from 'react'

const BaseLayout = (props) => {
  return (
    <div className={`${props.className ? ' ' + props.className : ''}`}>
      {props.nav}
      {props.main}
    </div>
  )
}

export default BaseLayout
