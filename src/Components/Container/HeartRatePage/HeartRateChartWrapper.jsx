import React, { useState } from 'react'
import ChartComponent from './HeartRateChart'
import ButtonGroup from '../../Presentational/ButtonGroup'
import ButtonGroupItem from '../../Presentational/ButtonGroupItem'

function HeartRateChartWrapper({ data, extClass, ...attrs }) {
  const [display, setDisplay] = useState('avg')

  const displayTypes = ['all', 'avg', 'min', 'max']

  if (data.length) {
    return (
      <div {...attrs}>
        <ButtonGroup>
          {displayTypes.map((d, i) => (
            <ButtonGroupItem
              key={i}
              extClass={'btn-group__item'}
              onClick={setDisplay.bind(null, d)}
              active={display === d}
            >
              {d.toUpperCase()}
            </ButtonGroupItem>
          ))}
        </ButtonGroup>
        <ChartComponent data={data} extClass="mt-5" display={display} />
      </div>
    )
  } else {
    return (
      <h3 className="mt-9 text-center block">
        Chart doesn't have any data to show. Try to change the filters.
      </h3>
    )
  }
}

export default HeartRateChartWrapper
