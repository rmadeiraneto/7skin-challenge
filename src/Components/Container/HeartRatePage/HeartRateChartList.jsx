import React, { useState, useEffect } from 'react'
import HeartRateChartWrapper from './HeartRateChartWrapper'
import HeartRateList from './HeartRateList'
import DatePicker from 'tailwind-datepicker-react'

/*
 * Some improvements to this component would be to have the first fetch of data
 * to set a min and max date for the date picker. Something like:
 *
 *     const [minDate, setMinDate] = useState(new Date(0))
 *     const [maxDate, setMaxDate] = useState(new Date())
 *     //(...)
 *     // And inside fetchData:
 *     const dateTimeValues = data.map((item) => new Date(item.dateTime));
 *     const minDateTimeValue = new Date(Math.min(...dateTimeValues));
 *     const maxDateTimeValue = new Date(Math.max(...dateTimeValues));
 *     setMinDateTime(minDateTimeValue);
 *     setMaxDateTime(maxDateTimeValue);
 */

function HeartRateChartList({ extClass, showChart }) {
  extClass = extClass || ''
  const [heartRateData, setHeartRateData] = useState([])
  const [fromDate, setFromDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const options = {
    autoHide: true,
    clearBtn: false,
  }

  useEffect(() => {
    const fetchData = async (fromDate) => {
      console.log('fetching')
      try {
        const response = await fetch(
          `http://localhost:5000/heartrate${
            fromDate ? `?fromDate=${fromDate.toISOString()}` : ''
          }`
        )
        console.log(
          `http://localhost:5000/heartrate${
            fromDate ? `?fromDate=${fromDate}` : ''
          }`
        )
        const data = await response.json()
        console.log(data)
        setHeartRateData(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData(fromDate)
  }, [fromDate])

  return (
    <div className={extClass}>
      <div className="flex items-center gap-2">
        <label className="shrink-0 font-semibold">Get data From</label>
        <DatePicker
          defaultDate={fromDate}
          options={options}
          onChange={setFromDate}
          show={show}
          setShow={setShow}
        />
      </div>
      {showChart ? (
        <HeartRateChartWrapper
          data={heartRateData}
          className="text-center mt-7"
        />
      ) : (
        <HeartRateList data={heartRateData} className="mt-7" />
      )}
    </div>
  )
}

export default HeartRateChartList
