import React from 'react'
import { shallow } from 'enzyme'
import Header from '../components/header'

const component = shallow(<Header />)

it('renders the header component', () => {
  expect(component).toMatchSnapshot()
})

it('renders a header', () => {
  const header = component.find('header')
  expect(header).toHaveLength(1)
})

it('renders some divs', () => {
  const divs = component.find('div')
  expect(divs).toHaveLength(2)
})

it('renders an image', () => {
  const image = component.find('img')
  expect(image).toHaveLength(1)
})
