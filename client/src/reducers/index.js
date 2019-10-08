import { combineReducers } from 'redux'
import gridReducer from '../features/grid/gridSlice'
import paginationReducer from '../features/pagination/paginationSlice'


export default combineReducers({
  list: gridReducer,
  pagination: paginationReducer,
})