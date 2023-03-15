import React from 'react'

function Buttons({ classname, label }) {
  return (
    <button className={classname}> {label} </button>
  )
}

export default Buttons