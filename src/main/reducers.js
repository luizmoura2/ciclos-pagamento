/* ============================== */
/* File: reducers.js */
/* Author: Luiz Moura */
/* Email: luizmoura2@hotmail.com */
/* © Copyright 26/09/2020 09:32 */
/* ============================== */
import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tabs/tabReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
})

export default rootReducer