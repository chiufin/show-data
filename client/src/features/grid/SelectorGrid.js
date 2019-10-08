import { connect } from 'react-redux'
import { createSelector } from 'redux-starter-kit'
import { GridColFilters } from '../filters/filtersSlice'
// import { PaginationFilters } from '../pagination/paginationSlice'
import Grid from './Grid'

const selectList = state => state.list
const selectFilter = state => state.filter
// const selectPagination = state => state.pagination

const selectFilterList = createSelector(
    [selectList, selectFilter],
    (list, filter) => {
        switch (filter) {
            case GridColFilters.RESET:
                return list
            case GridColFilters.DOB:
                const compare = (a, b) => {
                    let getDateNumA = a['date_of_birth'].split('/');
                    let getDateNumB = b['date_of_birth'].split('/');
                    let dateA = new Date(getDateNumA[2], getDateNumA[1]-1, getDateNumA[0]);
                    let dateB = new Date(getDateNumB[2], getDateNumB[1]-1, getDateNumB[0]);
                    
                    return dateA > dateB ? -1 : 1
                }
                return list.slice(0).sort(compare)
            case GridColFilters.INDUSTRY:
                return list
            case GridColFilters.ANNUAL_INCOME:   
                const sortMethod = (list, key) => {
                    const compare = (a, b) => a[key] > b[key] ? -1 : 1
                    return list.slice(0).sort(compare)
                } 
                return sortMethod(list, 'salary')
            default:
                throw new Error('Unknown filter: ' + filter)
        }
    }
)

// const selectPaginationList = createSelector(
//     [selectList, selectPagination],
//     (list, pagination) => {
//         console.log(list)
//         switch (pagination) {
//             case PaginationFilters.PREVIOUS:
//                 return list
//             case PaginationFilters.NEXT:
//                 return list
//             default:
//                 throw new Error('Unknown pagination: ' + pagination)
//         }
//     }
// )

const mapStateToProps = (state) => ({
    list: selectFilterList(state)
})

export default connect(
    mapStateToProps,
)(Grid)
