import React from 'react'

export default function Charts({info}) {
  return (
    <div className='chart'>
      <h3 className='chart-amount'>${info.amount}</h3>
      <div className='bar-body'>

      
      <div className='bar' style={{height: `${info.height}px`}}>

      </div>
        <h3>{info.day}</h3>
      </div>
    </div>
  )
}
