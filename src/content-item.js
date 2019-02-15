import React from 'react'

const calculateReadTime = (wordcount) => {
  const readTime = ((parseInt(wordcount))/275).toFixed()
  return readTime
}

const truncateTrailText = (trailText) => {
  const shorterText = trailText.split(' ').slice(0,12).join(' ').concat('...')
  return shorterText
}

const ContentItem = ({ article, last }) => (
  <li className={last ? '' : "not-last-list-item"}>
    <a href={article.webUrl} target="_blank" rel="noopener noreferrer">
      {article.webTitle}
    </a><br />
    <span className="trailText">
      {truncateTrailText(article.fields.trailText)}
    </span>
    <span className="readTime">
      {`- ${calculateReadTime(article.fields.wordcount)} minute read`}
    </span>
  </li>
)

export default ContentItem
