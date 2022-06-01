import React from 'react'

import { Select } from '../../components'

import './header.scss'

const Header = () => {
  return (
    <div className='container__header'>
      <h1>Fun with AI</h1>
      <h3>Enter Promt</h3>
      <div className='container__header-area'>
        <div className='container__header-area__text'>
          <textarea rows="4" cols="50"/>
          <button>Submit</button>
        </div>
        <Select />
      </div>
    </div>
  )
}

export default Header