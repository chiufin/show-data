import { createSlice } from 'redux-starter-kit'

export const ChartsLib = {
    BAR: 'BAR',
    LINE: 'LINE',
}

const chartsSlice = createSlice({
  slice: 'charts',
  initialState: ChartsLib.BAR,
  reducers: {
    changeChart(state, action) {
      return action.payload
    }
  }
})

export const { changeChart } = chartsSlice.actions

export default chartsSlice.reducer