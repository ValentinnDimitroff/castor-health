import React from 'react'
import { Route } from "react-router-dom";
import { BloodPressureList } from './components';

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={BloodPressureList} />
            <Route exact path='/blood-pressure' component={BloodPressureList} />
        </>
    )
}

export default Routes
