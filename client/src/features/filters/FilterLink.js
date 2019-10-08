import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from './filtersSlice'
import PropTypes from 'prop-types'

const Link = ({ active, children, changeFilter, filter }) => (
  <button
    onClick={() => changeFilter(filter)}
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
  filter: PropTypes.string.isRequired
}


const mapDispatchToProps = { changeFilter }

export default connect(
  null,
  mapDispatchToProps
)(Link)