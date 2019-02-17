import React from 'react'
import logo from '../images/logo.svg'

const Header = () => (
  <header className="col s12 m12 l12">
    <div className="row banner">
      <div className="logo col s8 offset-s4 m6 offset-m6 l4 offset-l8">
        <img src={logo} alt="The Guardian"/>
      </div>
    </div>
  </header>
)

export default Header
