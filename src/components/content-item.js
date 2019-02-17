import React from 'react'

const calculateReadTime = (wordcount) => {
  const readTime = ((parseInt(wordcount))/275).toFixed()
  return readTime
}

const truncateTrailText = (trailText) => {
  const shorterText = trailText.split(' ').slice(0,12).join(' ').concat('...')
  return shorterText
}

const ContentItem = ({ trailText, webTitle, webUrl, wordcount, last }) => (
  <li className={last ? '' : "not-last-list-item"}>
    <a href={webUrl} target="_blank" rel="noopener noreferrer">
      {webTitle}
    </a><br />
    <span className="trailText">
      {truncateTrailText(trailText)}
    </span>
    <span className="readTime">
      {`- ${calculateReadTime(wordcount)} minute read`}
    </span>
  </li>
)

export default ContentItem
