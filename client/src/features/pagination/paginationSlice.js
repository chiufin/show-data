import { createSlice } from 'redux-starter-kit'

export const PaginationFilters = {
  INIT: 'INIT',
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT'
}

const paginationSlice = createSlice({
  slice: 'pagination',
  initialState: {
    start: 0,
    amount: 20,
    total: 500,
  },
  reducers: {
    changePage(state, action) {
      switch(action.payload){
        case PaginationFilters.NEXT:
          state.start += state.amount
          break;
        case PaginationFilters.PREVIOUS: 
          if(state.start > 0){
            state.start -= state.amount
          }
          break;
        default:
      }
    }
  }
})

export const { changePage } = paginationSlice.actions

export default paginationSlice.reducer