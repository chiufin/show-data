import React from 'react'
import { connect } from 'react-redux'
import { changePage } from './paginationSlice'
import PropTypes from 'prop-types'

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

const mapStateToProps = (state, ownProps) => ({
  active: false
})

const mapDispatchToProps = { changePage }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)