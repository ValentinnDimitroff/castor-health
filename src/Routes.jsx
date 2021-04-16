import React from 'react'
import { Route } from "react-router-dom";
import { BloodGlucoseList, BloodPressureList, WeightList, WeightEdit, BloodGlucoseEdit, BloodPressureEdit } from './components';

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={BloodPressureList} />

            <Route exact path='/blood-pressure' component={BloodPressureList} />
            <Route exact path='/blood-pressure/edit/:id' component={BloodPressureEdit} />

            <Route exact path='/weight' component={WeightList} />
            <Route exact path='/weight/edit/:id' component={WeightEdit} />
            
            <Route exact path='/blood-glucose' component={BloodGlucoseList} />
            <Route exact path='/blood-glucose/edit/:id' component={BloodGlucoseEdit} />
        </>
    )
}

export default Routes
