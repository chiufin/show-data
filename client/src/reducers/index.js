import { combineReducers } from 'redux'
import gridReducer from '../features/grid/gridSlice'
import filterReducer from '../features/filters/filtersSlice'
import paginationReducer from '../features/pagination/paginationSlice'
import searchReducer from '../features/search/searchSlice'

import chartReducer from '../features/chart/chartsSlice'


export default combineReducers({
  list: gridReducer,
  filter: filterReducer,
  pagination: paginationReducer,
  search: searchReducer,
  chart: chartReducer,
})