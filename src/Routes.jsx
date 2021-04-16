import React from 'react'
import { Route } from "react-router-dom";
import { BloodGlucoseList, BloodPressureList, WeightList } from './components';

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={BloodPressureList} />
            <Route exact path='/blood-pressure' component={BloodPressureList} />
            <Route exact path='/weight' component={WeightList} />
            <Route exact path='/blood-glucose' component={BloodGlucoseList} />
        </>
    )
}

export default Routes
