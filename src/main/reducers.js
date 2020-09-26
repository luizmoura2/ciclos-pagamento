/* ============================== */
/* File: reducers.js */
/* Author: Luiz Moura */
/* Email: luizmoura2@hotmail.com */
/* © Copyright 26/09/2020 09:32 */
/* ============================== */
import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer