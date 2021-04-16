import React from 'react'
import { MetricsBaseList } from '../../shared'

const BloodPressureList = props => {
    const data = [
        { id: 1, date: '2021-02-29', value: 10.2 },
        { id: 2, date: '2021-02-29', value: 10.2 },
        { id: 3, date: '2021-02-29', value: 10.2 },
        { id: 4, date: '2021-02-29', value: 10.2 },
        { id: 5, date: '2021-02-29', value: 10.2 },
    ]
    
    return (
        <MetricsBaseList title="Blood Pressure" records={data}/>
    )
}


export default BloodPressureList
