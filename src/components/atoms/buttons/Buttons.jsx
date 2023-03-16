import React from 'react'

function Buttons({ classname, label, ...rest}) {
  return (
    <button className={classname} {...rest}> {label} </button>
  )
}

export default Buttons