import React, { Component, Fragment } from 'react'
import { apiKey } from './config.js'
import './App.css';

import Header from './header'
import Content from './content'
import ContentItem from './content-item'
import Tabs from './tabs'
import Tab from './tab'

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
                {football && news && travel && (
                  <Fragment>
                    <Content key="football" id="football" show={active === "football"}>
                      {footballResults.map((result, i) =>
                        <ContentItem key={'football' + i} article={result} last={i === 4} />
                      )}
                    </Content>
                    <Content key="news" id="news" show={active === "news"}>
                      {newsResults.map((result, i) =>
                        <ContentItem key={'news' + i} article={result} last={i === 4} />
                      )}
                    </Content>
                    <Content key="travel" id="travel" show={active === "travel"}>
                      {travelResults.map((result, i) =>
                        <ContentItem key={'travel' + i} article={result} last={i === 4} />
                      )}
                    </Content>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
