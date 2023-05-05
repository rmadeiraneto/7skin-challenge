import React from 'react'

const Switch = ({ className = 'switch', extClass, ...attrs }) => {
  return (
    <input
      {...attrs}
      type={'checkbox'}
      className={`${className}${extClass ? ' ' + extClass : ''}`}
    />
  )
}

export default Switch
