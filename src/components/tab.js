import React from 'react'


const Tab = ({ section, onClick }) => (
  <li className="tab col s4" onClick={onClick}>
    <a href={`#${section}`} className="tabs-style">
      {section}
    </a>
  </li>
)

export default Tab
