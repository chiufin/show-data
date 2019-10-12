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