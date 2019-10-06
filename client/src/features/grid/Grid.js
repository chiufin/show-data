import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchMockData } from './gridSlice'

const Grid = ({list}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMockData())
  }, [dispatch])

  if(list.length === 0){
    return "loading"
  }

  return (
    <div>
      <table>
        <TableHead />
        <TableBody list={list} pageStart={0} limit={10}/>
      </table>
    </div>
  )
}

const config = {
  id: 'Unique Identifier',
  first_name: 'First Name',
  last_name: 'Last Name',
  date_of_birth: 'DOB' ,
  industry: 'Industry',
  salary: 'Annual income',
}

const TableHead = () => {
  return (
    <thead>
      <tr>
        {Object.entries(config).map(title => <th key={title[0]}>{title[1]}</th>)}
      </tr>
    </thead>
  )
}

const TableBody = ({list, pageStart, limit}) => {
  return (
    <tbody>
      {list.map(eachData => {
        const { id } = eachData
        return(
          <TableRow key={`row-${id}`} data={eachData}/>
        )
      })}
      
    </tbody>
  )
}

const TableRow = ({ data }) => {
  return (
    <tr>
      {Object.entries(config).map(key => <td key={`${[key[0]]}-${data.id}`}>{data[key[0]]}</td>)}
    </tr>
  )
}

const mapStateToProps = ({ gridList }) => ({
  list: gridList
})

const mapDispatchToProps = { fetchMockData }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)