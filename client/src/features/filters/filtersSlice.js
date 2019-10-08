import { createSlice } from 'redux-starter-kit'

export const GridColFilters = {
    RESET: 'RESET',
    DOB: 'DOB',
    INDUSTRY: 'INDUSTRY',
    ANNUAL_INCOME: 'ANNUAL_INCOME'
}

const filtersSlice = createSlice({
  slice: 'filters',
  initialState: GridColFilters.RESET,
  reducers: {
    changeFilter(state, action) {
      return action.payload
    }
  }
})

export const { changeFilter } = filtersSlice.actions

export default filtersSlice.reducer