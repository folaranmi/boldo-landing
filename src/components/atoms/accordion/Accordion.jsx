import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";

function Accordion({ title, content }) {

    const [selected, setSelected] = useState(false);

    return (
        <div className='accordion'>
            <div className="accordion__heading" onClick={() => setSelected(!selected)}>
                <h4 className={`text ${selected === true ? 'active' : ''} `}>{title}</h4>
                <div className="iconbox">
                    <FiChevronDown className={`icon ${selected === true ? 'active' : ''} `} size="1.8rem" />
                </div>
            </div>

            {selected &&
                <div className={`accordion__content ${selected === true ? 'active' : ''}`}>
                    <div>{content}</div>
                </div>
            }
        </div>
    )
}

export default Accordion