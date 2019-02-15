import React from 'react'
import { shallow } from 'enzyme'
import Content from '../content'

it('renders content', () => {
  const component = shallow(<Content />)
  const div = component.find('div').at(0)
  const ol = component.find('ol').at(0)
  expect(component).toMatchSnapshot()
  expect(div).toHaveLength(1)
  expect(ol).toHaveLength(1)
});
