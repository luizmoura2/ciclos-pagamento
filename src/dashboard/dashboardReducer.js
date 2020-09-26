/* ============================== */
/* File: dashboardReducer.js */
/* Author: Luiz Moura */
/* Email: luizmoura2@hotmail.com */
/* © Copyright 26/09/2020 11:24 */
/* ============================== */
const INITIAL_STATE = {summary: {credit: 50, debt: 10}}

export default (state= INITIAL_STATE, action) => {
    switch (action.type){
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data}
        default:
            return state    
    }
    
}