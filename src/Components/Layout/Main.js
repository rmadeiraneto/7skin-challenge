import React from 'react'

const Main = (props) => {
  return (
    <main className={`main${props.extClass ? ' ' + props.extClass : ''}`}>
      {props.children}
    </main>
  )
}

export default Main
