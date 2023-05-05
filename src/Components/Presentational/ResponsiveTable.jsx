import React from 'react'
import utils from '../../Utilities/_utils'

const ResponsiveTable = ({ align, className, extClass, data }) => {
  className = className || 'r-table'
  align = align === ('center' | 'left' | 'right') ? align : 'center'

  return (
    <table className={`${className}${extClass ? ' ' + extClass : ''}`}>
      <thead className={className + '__thead'}>
        <tr className={className + '__tr'}>
          {Object.keys(data[0]).map((key, i) => (
            <th className={className + '__th'} align={align} key={i}>
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={className + '__tbody'}>
        {data.map((record, i) => (
          <tr className={className + '__tr'} key={i}>
            {Object.keys(data[0]).map((key, i) => (
              <td
                className={className + '__td ' + className + '__td--' + align}
                data-label={utils.stringToHuman(key, false)}
                key={i}
              >
                {record[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ResponsiveTable
