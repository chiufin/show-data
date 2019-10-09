import React from 'react'
import VisiableGrid from '../features/grid/VisiableGrid'
import Filter from '../features/filters/Filter'
import Pagination from '../features/pagination/Pagination'


const GridPage = () => (
    <>
        <h2>Grid</h2>
        <Filter/>
        <Pagination />
        <VisiableGrid />
    </>
)

export default GridPage
  