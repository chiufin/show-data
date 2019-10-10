import React from 'react'
import { connect } from 'react-redux'
import { changePage } from './paginationSlice'
import PropTypes from 'prop-types'
import { PaginationFilters } from './paginationSlice'

const Link = ({ active, children, changePage, filter }) => (
  <button
    onClick={() => changePage(filter)}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  changePage: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

const mapStateToProps = ({pagination: {start, total, amount}}, {filter}) => {
  let active = false
    switch(filter){
    case PaginationFilters.PREVIOUS:
      if(start === 0){
        active = true
      }
      break;
    case PaginationFilters.NEXT:
      if(total-1 - (start + amount) <= 0){
        active = true
      }
      break;
    default:
      break;
  }
  return ({ active })
}

const mapDispatchToProps = { changePage }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)