import React from 'react'

const Content = ({ section, children, show }) =>
  <div id={section} className={show ? 'show' : 'hide'} >
    <ol>
      {children}
    </ol>
  </div>


export default Content
