import React from 'react'
import PageLink from './PageLink'
import { PaginationFilters } from './paginationSlice'

const Pagination = () => (
  <div>
    <PageLink filter={PaginationFilters.PREVIOUS}>Previous</PageLink>
    <PageLink filter={PaginationFilters.NEXT}>Next</PageLink>
  </div>
)

export default Pagination