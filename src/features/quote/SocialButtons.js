import React from 'react'
import { useSelector } from 'react-redux'

import { selectQuote } from './quoteSlice'

export const SocialButtons = () => {
  const quote = useSelector(selectQuote)

  const tweetUrl = 'https://twitter.com/intent/tweet'
  const tweetText = `text="${quote.content}" ${quote.author}`
  const tweetTags = 'hashtags=quote'

  const twitterShare = (
    <span>
      <a
        id='tweet-quote'
        href={`${tweetUrl}?${tweetText}&${tweetTags}`}
        // disabled={canShare}
      >
        <i className="icon-social icon-twitter-sign"></i>
      </a>
    </span>
  )

  return (
    <div className='social-buttons'>
      {twitterShare}
    </div>
  )
}
