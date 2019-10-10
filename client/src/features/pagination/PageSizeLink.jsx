import React from 'react'
import { connect } from 'react-redux'
import { changePageSize, changePage, PaginationFilters, PaginationSizeAmount } from './paginationSlice'
import PropTypes from 'prop-types'

const Link = ({ active, children, changePageSize, changePage, size }) => (
  <button
    onClick={() => {
        changePageSize(size)
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
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  changePageSize: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired
}

const mapStateToProps = ({pagination: {amount}}, {size}) => ({
  active : amount === PaginationSizeAmount[size]
})


const mapDispatchToProps = { changePageSize, changePage }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)