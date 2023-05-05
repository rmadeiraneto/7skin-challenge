import React from 'react'
import ResponsiveTable from '../../Presentational/ResponsiveTable'
import { DateTime } from 'luxon'

const HeartRateList = ({ data, ...attrs }) => {
  data = data.map(
    (record) =>
      (record = {
        ...record,
        dateTime: DateTime.fromISO(record.dateTime).toFormat(
          'dd/MM/yyyy HH:mm:ss'
        ),
      })
  )
  if (data.length) {
    return (
      <div {...attrs}>
        <ResponsiveTable data={data} />
      </div>
    )
  } else {
    return (
      <h3 className="mt-9 text-center block">
        List doesn't have any data to show. Try to change the filters.
      </h3>
    )
  }
}

export default HeartRateList
