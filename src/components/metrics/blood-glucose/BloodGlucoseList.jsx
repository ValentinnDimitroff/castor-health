import React from 'react'
import { MetricsBaseList } from '../../shared'
import {  useSelector } from 'react-redux'
import { singleMetricSelector } from '../../../store'

const BloodGlucoseList = () => {
    const { data, average } = useSelector(singleMetricSelector("blood-glucose"))
    
    return (
        <MetricsBaseList title="Blood Glucose Level" records={data} average={average}/>
    )
}


export default BloodGlucoseList
