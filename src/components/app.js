import React, { Component, Fragment } from 'react'
import { apiKey } from '../config.js'
import './app.css';

import Header from './header'
import Content from './content'
import ContentItem from './content-item'
import Tabs from './tabs'
import Tab from './tab'

const ContentComposer = ({ section, articles, active }) =>
  <Content key={section} id={section} show={active === section}>
    {articles.map((result, i) =>
      <ContentItem
        key={section + i}
        webUrl={result.webUrl}
        webTitle={result.webTitle}
        trailText={result.fields.trailText}
        wordcount={result.fields.wordcount}
        last={i === 4}
      />
    )}
  </Content>


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: ['football', 'news', 'travel'],
      active: 'football'
    }
  }

  componentDidMount() {
    const { sections } = this.state
    sections.forEach(section => {
      this.fetchNews(section)
    })
  }

  fetchNews = (section) => {
    const sectionForUrl = section === 'news' ? 'uk-news' : section
    const url = `http://content.guardianapis.com/search?api-key=${apiKey}&show-fields=all&order-by=newest&section=${sectionForUrl}`

    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({ [section]: data })
      });
  }

  selectTab = (section) => {
    this.setState({ active: section })
  }

  render() {
    const { sections, football, news, travel, active } = this.state
    const footballResults = football && football.response.results.slice(0,5)
    const newsResults = news && news.response.results.slice(0,5)
    const travelResults = travel && travel.response.results.slice(0,5)

    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="news-widget">
            <div className="row">
              <div className="col s12 l6 offset-l6 news-tabs">
                <Tabs>
                  {sections.map(section =>
                    <Tab
                      key={section}
                      section={section}
                      onClick={() => this.selectTab(section)}
                    />
                  )}
                </Tabs>
                <Fragment>
                  {footballResults &&
                    <ContentComposer
                      section="football"
                      articles={footballResults}
                      active={active}
                    />
                  }
                  {newsResults &&
                    <ContentComposer
                      section="news"
                      articles={newsResults}
                      active={active}
                    />
                  }
                  {travelResults &&
                    <ContentComposer
                      section="travel"
                      articles={travelResults}
                      active={active}
                    />
                  }
                </Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
