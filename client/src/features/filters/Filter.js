import React from 'react'
import FilterLink from './FilterLink'
import { GridColFilters } from './filtersSlice'

const Filter = () => (
  <div>
    <FilterLink filter={GridColFilters.ALL}>SHOW ALL</FilterLink>
    <FilterLink filter={GridColFilters.DOB}>DOB</FilterLink>
    <FilterLink filter={GridColFilters.INDUSTRY}>INDUSTRY</FilterLink>
    <FilterLink filter={GridColFilters.ANNUAL_INCOME}>ANNUAL_INCOME</FilterLink>
  </div>
)

export default Filter