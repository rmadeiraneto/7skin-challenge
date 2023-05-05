import React from 'react'
import './Style/main.scss'
import MainLayout from './Components/Layout/MainLayout'
import HeartRatePage from './Pages/HeartRatePage'

function App(props) {
  const defaults = {
    extClass: '',
  }

  props = {
    ...defaults,
    ...props,
  }

  return (
    <div className={`app${props.extClass ? ' ' + props.extClass : ''}`}>
      <MainLayout mainContent={<HeartRatePage />} />
    </div>
  )
}

export default App
