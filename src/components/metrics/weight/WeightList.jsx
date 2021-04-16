import React from 'react'
import { MetricsBaseList } from '../../shared'

const WeightList = props => {
    const data = [
        { id: 1, date: '2021-02-29', value: 68 },
        { id: 2, date: '2021-02-29', value: 73.6 },
        { id: 3, date: '2021-02-29', value: 69.6 },
        { id: 4, date: '2021-02-29', value: 70.2 },
        { id: 5, date: '2021-02-29', value: 69.2 },
    ]

    return (
        <MetricsBaseList title="Weight" records={data} />
    )
}


export default WeightList
