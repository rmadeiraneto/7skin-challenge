import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import 'chartjs-adapter-luxon'
import brandInfo from '../../../brandInfo.json'

const HeartRateChart = (props) => {
  const defaults = {
    data: null,
    display: 'avg',
    extClass: '',
  }

  props = {
    ...defaults,
    ...props,
  }

  const chartRef = useRef(null)

  useEffect(() => {
    if (props.data.length === 0) return

    const labels = props.data.map((d) => new Date(d.dateTime))
    const minValues = props.data.map((d) => parseInt(d.minimum))
    const maxValues = props.data.map((d) => parseInt(d.maximum))
    const avgValues = props.data.map((d) => parseInt(d.meanAverage))

    const datasetsConfig = {
      min: {
        label: 'Minimum',
        data: minValues,
        borderColor: brandInfo.charts.colors.tertiary,
        fill: false,
      },
      max: {
        label: 'Maximum',
        data: maxValues,
        borderColor: brandInfo.charts.colors.secondary,
        fill: false,
      },
      avg: {
        label: 'Average',
        data: avgValues,
        borderColor: brandInfo.charts.colors.primary,
        fill: false,
      },
    }

    const datasets = []

    switch (props.display) {
      case 'all':
        datasets.push(...Object.values(datasetsConfig))
        break
      default:
        if (datasetsConfig.hasOwnProperty(props.display)) {
          datasets.push(datasetsConfig[props.display])
        } else {
          console.log(
            `Display option "${props.display}" doesn't exist in this context. Showing results for "${defaults.display}"`
          )
          datasets.push(datasetsConfig[defaults.display])
        }
    }

    const chartInstance = chartRef.current

    if (chartInstance) {
      chartInstance.destroy()
    }

    const ctx = document.getElementById('heartRateChart')

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            time: {
              tooltipFormat: 'DD T',
            },
            title: {
              display: true,
              text: 'Date',
            },
            type: 'time',
          },
          y: {
            grid: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 200,
            title: {
              display: true,
              text: 'Heart Rate',
            },
          },
        },
      },
    })
  }, [props.data, props.display, defaults.display])

  return (
    <canvas
      className={`chart chart--line${
        props.extClass ? ' ' + props.extClass : ''
      }`}
      id="heartRateChart"
    ></canvas>
  )
}

export default HeartRateChart
