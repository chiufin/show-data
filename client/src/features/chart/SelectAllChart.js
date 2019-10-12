import { connect } from 'react-redux'
import { createSelector } from 'redux-starter-kit'
import AllChart from './AllChart'

const selectList = state => state.list

const selectDOBmonth = createSelector(
    [selectList],
    (list) => {
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
        return data
    }
)


const mapStateToProps = (state) => {
    return{
        data: selectDOBmonth(state)
    }
}

export default connect(
    mapStateToProps,
)(AllChart)
