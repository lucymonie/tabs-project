import React from 'react'
import { shallow } from 'enzyme'
import Tab from '../components/tab'

const props = {
  section: 'technology',
  onClick: jest.fn()
}

const component = shallow(<Tab {...props} />)

it('renders a tab', () => {
  expect(component).toMatchSnapshot()
})

it('renders a list item', () => {
  const li = component.find('li')
  expect(li).toHaveLength(1)
})

it('renders an anchor text with section text', () => {
  const a = component.find('a')
  expect(a).toHaveLength(1)
  expect(a.text()).toBe('technology')
})

it('registers a click event', () => {
  const li = component.find('li')
  li.simulate('click')
  expect(props.onClick.mock.calls).toHaveLength(1)
})
