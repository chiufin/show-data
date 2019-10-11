import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchMockData } from '../grid/gridSlice'
// import Bar from './Bar'
import Line from './Line'

const Chart = ({data}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMockData())
  }, [dispatch])

  return (
    <div>
      {/* <Bar data={data}/> */}
      <Line data={data}/>
    </div>
  )
}

const mapStateToProps = ({list, chart}) => ({
  data: list,
  chart: chart

})

const mapDispatchToProps = { fetchMockData }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart)
