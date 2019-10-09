import React from 'react'
import VisiableGrid from '../features/grid/VisiableGrid'
import Filter from '../features/filters/Filter'
import Pagination from '../features/pagination/Pagination'
import Search from '../features/search/Search'


const GridPage = () => (
    <>
        <h2>Grid</h2>
        <Filter/>
        <Pagination />
        <Search />
        <VisiableGrid />
    </>
)

export default GridPage
  