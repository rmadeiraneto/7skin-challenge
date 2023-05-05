import React from 'react'

const ButtonGroup = (props) => {
  const defaults = {
    className: 'btn-group',
    extClass: '',
  }

  props = {
    ...defaults,
    ...props,
  }
  return (
    <div
      className={`${props.className}${
        props.extClass ? ' ' + props.extClass : ''
      }`}
    >
      {props.children}
    </div>
  )
}

export default ButtonGroup
