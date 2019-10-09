import { createSlice } from 'redux-starter-kit'

export const GridColFilters = {
    INIT: 'INIT',
    DOB: 'DOB',
    INDUSTRY: 'INDUSTRY',
    ANNUAL_INCOME: 'ANNUAL_INCOME'
}

const filtersSlice = createSlice({
  slice: 'filters',
  initialState: GridColFilters.INIT,
  reducers: {
    changeFilter(state, action) {
      return action.payload
    }
  }
})

export const { changeFilter } = filtersSlice.actions

export default filtersSlice.reducer