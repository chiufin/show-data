import { createSlice } from 'redux-starter-kit'

const searchSlice = createSlice({
  slice: 'pagination',
  initialState: '',
  reducers: {
    search(state, { payload }) {
      return payload
    }
  }
})

export const { search } = searchSlice.actions

export default searchSlice.reducer