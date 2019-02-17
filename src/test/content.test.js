import React from 'react'
import { shallow } from 'enzyme'
import Content from '../components/content'

const component = shallow(<Content />)

it('renders content', () => {
  expect(component).toMatchSnapshot()
})

it('contains an unordered list', () => {
  const ol = component.find('ol').at(0)
  expect(ol).toHaveLength(1)
})
