import { createSlice } from 'redux-starter-kit'

export const PaginationFilters = {
  INIT: 'INIT',
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT'
}

export const PaginationSize = {
  SMALL: 'SMALL',
  LARGE: 'LARGE'
}

export const PaginationSizeAmount = {
  SMALL: 20,
  LARGE: 100
}

const paginationSlice = createSlice({
  slice: 'pagination',
  initialState: {
    start: 0,
    amount: 20,
    total: 0,
  },
  reducers: {
    changePage(state, action) {
      switch(action.payload){
        case PaginationFilters.INIT:
          state.start = 0
          break;
        case PaginationFilters.NEXT:
          if(state.total-1 - (state.start + state.amount) > 0){
            state.start += state.amount
          }
          break;
        case PaginationFilters.PREVIOUS: 
          if(state.start > 0){
            state.start -= state.amount
          }
          break;
        default:
      }
    },
    setPageTotal(state, action) {
      state.total = action.payload
    },
    changePageSize(state, action) {
      state.amount = PaginationSizeAmount[action.payload]
    }
  }
})

export const { changePage, setPageTotal, changePageSize } = paginationSlice.actions

export default paginationSlice.reducer