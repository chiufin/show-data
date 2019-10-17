import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { fetchMockData } from '../grid/gridSlice'

import Bar from './Bar'
import Pie from './Pie'

const AllChart = ({data}) => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchMockData())
    }, [dispatch])

    return (
        <div>
            <p>Get all data DOB, count the number of people per month</p>
            <p>bar and pie use same data</p>
            <Bar data={data}/>
            <Pie data={data}/>
        </div>
    );
}


const mapDispatchToProps = { fetchMockData }

export default connect(
    null,
    mapDispatchToProps
)(AllChart)