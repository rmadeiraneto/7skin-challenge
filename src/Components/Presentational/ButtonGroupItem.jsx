import React from 'react'

const ButtonGroupItem = (props) => {
  const defaults = {
    active: false,
    extClass: '',
    onClick: null,
  }

  props = {
    ...defaults,
    ...props,
  }

  return (
    <div
      className={`btn-group-item${
        props.active ? ' btn-group-item--active' : ''
      }${props.extClass ? ' ' + props.extClass : ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

export default ButtonGroupItem
