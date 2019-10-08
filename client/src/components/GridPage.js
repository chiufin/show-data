import React from 'react'
import Grid from '../features/grid/SelectorGrid'
import Filter from '../features/filters/Filter'
import Pagination from '../features/pagination/Pagination'


const GridPage = () => (
    <>
        <h2>Grid</h2>
        <Filter/>
        <Pagination />
        <Grid />
    </>
)

export default GridPage
  