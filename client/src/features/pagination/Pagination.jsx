import React from 'react'
import PageLink from './PageLink'
import PageSizeLink from './PageSizeLink'
import { PaginationFilters, PaginationSize } from './paginationSlice'

const Pagination = () => (
  <div>
    <PageLink filter={PaginationFilters.PREVIOUS}>Previous</PageLink>
    <PageLink filter={PaginationFilters.NEXT}>Next</PageLink>
    |
    <PageSizeLink size={PaginationSize.SMALL}>20</PageSizeLink>
    <PageSizeLink size={PaginationSize.LARGE}>100</PageSizeLink>
  </div>
)

export default Pagination