import React from 'react'
import { connect } from 'react-redux'
import { search } from './searchSlice'
import PropTypes from 'prop-types'

const Search = ({ search }) => (
  <div>
    <label>Search</label>
    <input type='text' onChange={({target: { value }}) => search(value)}></input>
  </div>
)
  

Search.propTypes = {
    search: PropTypes.func.isRequired
}

const mapDispatchToProps = { search }

export default connect(
    null,
    mapDispatchToProps
)(Search)