import React from 'react'
import { shallow } from 'enzyme'
import Tabs from '../components/tabs'


const component = shallow(<Tabs />)

it('renders tabs', () => {
  expect(component).toMatchSnapshot()
})

it('renders an unordered list', () => {
  const ol = component.find('ol')
  expect(ol).toBeTruthy()
})
