import React from 'react'

import './select.scss'

const Select = () => {
  return (
    <div className='fg'>
        <select name="box" id="box2">
            <option value="choose">Choose your AI</option>
            <option value="ai">AI</option>
            <option value="bb">BB</option>
            <option value="vv">VV</option>
      </select>
    </div>
  )
}

export default Select