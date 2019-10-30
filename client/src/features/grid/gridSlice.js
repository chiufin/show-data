import { createSlice } from 'redux-starter-kit'
import { getMockData } from '../../api/index'
import { setPageTotal } from '../pagination/paginationSlice'
const gridSlice = createSlice({
  slice: 'grid',
  initialState: [],
  reducers: {
    getData(state, { payload }) {
      return payload
    }
  }
})

export const fetchMockData = () => async dispatch => {
  try {
    const data = await getMockData()
    const json = await data.json()
    dispatch(getData(json))
    dispatch(setPageTotal(json.length))
  } catch (err) {}
}

export const { getData } = gridSlice.actions

export default gridSlice.reducer
