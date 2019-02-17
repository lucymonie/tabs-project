import React from 'react'
import { shallow } from 'enzyme'
import ContentItem from '../components/content-item'

const props = {
  webUrl: 'something',
  webTitle: 'a lovely title',
  trailText: 'something else, something really overly long to fit in the space allowed in the trail text space, very long and totally over the top',
  wordcount: 3000,
  last: false,
}

const component = shallow(<ContentItem {...props} />)

it('renders content items', () => {
  expect(component).toMatchSnapshot()
})

it('renders a title', () => {
  const title = component.find('a').at(0)
  expect(title.text()).toBe('a lovely title')
})

it('renders trauncated trail text', () => {
  const trail = component.find('span').at(0)
  expect(trail.text()).toBe('something else, something really overly long to fit in the space allowed...')
  const trailWords = trail.text().split(' ')
  expect(trailWords.length).toBeLessThan(13)
})

it('can calculate and render reading time', () => {
  const wordcount = component.find('span').at(1)
  expect(wordcount.text()).toBe('- 11 minute read')
})
