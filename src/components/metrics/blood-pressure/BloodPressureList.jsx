import React from 'react'
import { useSelector } from 'react-redux'
import { singleMetricSelector } from '../../../store'
import { MetricsBaseList } from '../../shared'

const BloodPressureList = () => {
    const { data, average } = useSelector(singleMetricSelector("blood-pressure"))

    return (
        <MetricsBaseList title="Blood Pressure" records={data} average={average} />
    )
}


export default BloodPressureList
