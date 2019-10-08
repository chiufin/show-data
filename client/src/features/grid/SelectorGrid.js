import { connect } from 'react-redux'
import { createSelector } from 'redux-starter-kit'
import { PaginationFilters } from '../pagination/paginationSlice'
import Grid from './Grid'

const selectList = state => state.list
const selectPagination = state => state.pagination

const selectVisibleList = createSelector(
    [selectList, selectPagination],
    (list, pagination) => {
        switch (pagination) {
            case PaginationFilters.PREVIOUS:
                return list
            case PaginationFilters.NEXT:
                return list.slice(5, 15)
            default:
            throw new Error('Unknown pagination: ' + pagination)
        }
    }
)

const mapStateToProps = (state) => ({
    list: selectVisibleList(state)
})

export default connect(
    mapStateToProps,
)(Grid)
