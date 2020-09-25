import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from  '../dashboard/daschboard'
import BillingCycle from '../billicycle/billicycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)