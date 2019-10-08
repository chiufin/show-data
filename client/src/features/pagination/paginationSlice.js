import { createSlice } from 'redux-starter-kit'

export const PaginationFilters = {
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT'
}

const paginationSlice = createSlice({
  slice: 'pagination',
  initialState: PaginationFilters.NEXT,
  reducers: {
    changePage(state, action) {
      return action.payload
    }
  }
})

export const { changePage } = paginationSlice.actions

export default paginationSlice.reducer