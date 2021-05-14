import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchQuote = createAsyncThunk(
  'quote/fetchQuote',
  async () => {
    const response = await fetch("https://api.quotable.io/random")
    return response.json()
  }
)

const initialState = {
  item: {},
  status: 'idle',
  error: null
}

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchQuote.pending]: (state, action) => {
      state.status = 'pending'
    },
    [fetchQuote.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.item = action.payload
    },
    [fetchQuote.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
})

export default quoteSlice.reducer

export const selectQuote = state => state.quote.item
