import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from './filtersSlice'
import PropTypes from 'prop-types'

const Link = ({ children, changeFilter, filter }) => (
  <button
    onClick={() => changeFilter(filter)}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}


const mapDispatchToProps = { changeFilter }

export default connect(
  null,
  mapDispatchToProps
)(Link)