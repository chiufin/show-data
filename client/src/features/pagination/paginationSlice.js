import { createSlice } from 'redux-starter-kit'

export const PaginationFilters = {
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT'
}

const paginationSlice = createSlice({
  slice: 'pagination',
  initialState: {
    start: 0,
    amount: 20,
    total: 500
  },
  reducers: {
    changePage(state, action) {
      console.log(action.payload)
      return action.payload
    }
  }
})

export const { changePage } = paginationSlice.actions

export default paginationSlice.reducer