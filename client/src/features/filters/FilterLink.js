import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from './filtersSlice'
import { changePage, PaginationFilters } from '../pagination/paginationSlice'
import PropTypes from 'prop-types'

const Link = ({ active, children, changeFilter, changePage, filter }) => (
  <button
    onClick={() => {
      changeFilter(filter)
      changePage(PaginationFilters.INIT)
    }}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  changeFilter: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}


const mapDispatchToProps = { changeFilter, changePage }

export default connect(
  null,
  mapDispatchToProps
)(Link)