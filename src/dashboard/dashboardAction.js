/* ============================== */
/* File: dashboardAction.js */
/* Author: Luiz Moura */
/* Email: luizmoura2@hotmail.com */
/* © Copyright 26/09/2020 11:24 */
/* ============================== */
import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSummary(){
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
   
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}