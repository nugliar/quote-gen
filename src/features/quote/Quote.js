import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchQuote, selectQuote } from './quoteSlice'
import { SocialButtons } from './SocialButtons'

export const Quote = () => {
  const dispatch = useDispatch()

  const quote = useSelector(selectQuote)
  const status = useSelector(state => state.quote.status)
  const error = useSelector(state => state.quote.error)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchQuote())
    }
  }, [dispatch, status])

  let author, content

  if (status === 'idle' || status === 'pending') {
    author = '...'
    content = '...'
  } else if (status === 'succeeded') {
    author = quote.author
    content = quote.content
  } else if (status === 'rejected') {
    author = '...'
    content = error
  }

  return (
    <section id='quote-box'>
      <h1>Quote</h1>
      <p id='text'>{content}</p>
      <p id='author'><i>{author}</i></p>
      <button
        id='new-quote'
        className='button'
        onClick={() => dispatch(fetchQuote())}
      >
        New quote
      </button>
      <SocialButtons />
    </section>
  )
}
