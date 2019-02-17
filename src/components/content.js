import React from 'react'

const Content = ({ section, children, show }) =>
  <ol id={section} className={show ? 'show' : 'hide'}>
    {children}
  </ol>


export default Content
