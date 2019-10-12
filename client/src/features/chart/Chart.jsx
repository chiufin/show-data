import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { useDispatch } from 'react-redux'
import { fetchMockData } from '../grid/gridSlice'

const Chart = ({list}) => {  
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchMockData())
    }, [dispatch])

    const parseData = list => list.reduce((acc, current) => {
        let parseDOB = current['date_of_birth'].split('/');
        let thisMonth = Number(parseDOB[1])
        if(!acc[thisMonth]){
            acc[thisMonth] = 1
        }else{
            acc[thisMonth] = acc[thisMonth]+1
        }
        return acc
    }, {})

    const sumOfMonth = parseData(list)
    const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let data = []
    monthList.forEach((month, i)=> {
        data.push({
            name: month,
            amount: sumOfMonth[i+1]
        })
    })
    
    return (
      <div>
        <BarChart
            width={500}
            height={300}
            data={data}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </div>
    )
}

const mapStateToProps = ({list}) => {
    return {
        list
    }
}

const mapDispatchToProps = { fetchMockData }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chart)