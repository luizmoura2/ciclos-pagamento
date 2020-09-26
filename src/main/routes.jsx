import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from  '../dashboard/dashboard' //Com Redux
//import Dashboard from  '../dashboardV2/dashboard' //Sem Redux
import BillingCycle from '../billicycle/billicycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)