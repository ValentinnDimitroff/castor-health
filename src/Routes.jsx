import React from 'react'
import { Route } from "react-router-dom";
import {
    BloodGlucoseList, BloodGlucoseEdit, BloodGlucoseCreate,
    BloodPressureList, BloodPressureEdit, BloodPressureCreate,
    WeightList, WeightEdit, WeightCreate
} from './components';

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={BloodPressureList} />

            <Route exact path='/blood-pressure' component={BloodPressureList} />
            <Route exact path='/blood-pressure/edit/:id' component={BloodPressureEdit} />
            <Route exact path='/blood-pressure/create' component={BloodPressureCreate} />

            <Route exact path='/weight' component={WeightList} />
            <Route exact path='/weight/edit/:id' component={WeightEdit} />
            <Route exact path='/weight/create' component={WeightCreate} />

            <Route exact path='/blood-glucose' component={BloodGlucoseList} />
            <Route exact path='/blood-glucose/edit/:id' component={BloodGlucoseEdit} />
            <Route exact path='/blood-glucose/create' component={BloodGlucoseCreate} />
        </>
    )
}

export default Routes
