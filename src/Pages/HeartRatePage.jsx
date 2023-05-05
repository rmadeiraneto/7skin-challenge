import React, { useState } from 'react'
import HeartRateChartList from '../Components/Container/HeartRatePage/HeartRateChartList'
import Switch from '../Components/Presentational/Switch'

function HeartRatePage() {
  const [chartView, setChartView] = useState(true)

  function onViewChange(event) {
    setChartView(event.target.checked)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <h3>List view</h3>
        <Switch extClass="ml-3" checked={chartView} onChange={onViewChange} />
        <h3 className="ml-3">Chart view</h3>
      </div>
      <HeartRateChartList extClass="mt-7" showChart={chartView} />
    </>
  )
}

export default HeartRatePage
