import { connect } from 'react-redux'
import { createSelector } from 'redux-starter-kit'
import { GridColFilters } from '../filters/filtersSlice'
import Grid from './Grid'

const searchFnt = (item ,key, searchWord) => {
    let upperCaseItem = item[key].toUpperCase()
    let  upperCaseSearchWord = searchWord.toUpperCase()
    return upperCaseItem.indexOf(upperCaseSearchWord) > -1
}


const selectList = state => state.list
const selectSearch = state => state.search
const selectFilter = state => state.filter
const selectPagination = state => state.pagination

const selectSearchList = createSelector(
    [selectList, selectSearch],
    (list, searchWord) => {
        if(!searchWord ){
            return list
        }
        let searchedList = []
        for(let i of list){
            if(i['first_name'] && searchFnt(i, 'first_name', searchWord)){
                searchedList.push(i)
            }else if(i['last_name'] && searchFnt(i, 'last_name', searchWord)){
                searchedList.push(i)
            }
        }
        return searchedList
    }
)

const selectFilterList = createSelector(
    [selectSearchList, selectFilter],
    (list, filter) => {
        switch (filter) {
            case GridColFilters.INIT:
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

const totalSelector = createSelector(
    selectFilterList,
    selectPagination,
    (filterList, {start, amount}) => {
        return filterList.slice(start, start+amount)
    }
  )

const mapStateToProps = (state) => {
    return{
        list: totalSelector(state)
    }
}

export default connect(
    mapStateToProps,
)(Grid)
