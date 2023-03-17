import React from 'react'

function InputField({ placeholder, type, ...rest }) {
    return (
        <input className="input-field" type={type} {...rest} placeholder={placeholder} />
    )
}

export default InputField