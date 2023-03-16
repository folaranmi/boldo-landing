import React from 'react'

function InputField({ placeholder, value, name, classname }) {
    return (
        <input className={classname} type="text" name={name} value={value} placeholder={placeholder} />
    )
}

export default InputField