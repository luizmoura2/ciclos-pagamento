/* ============================== */
/* File: If.jsx */
/* Author: Luiz Moura */
/* Email: luizmoura2@hotmail.com */
/* © Copyright 26/09/2020 17:15 */
/* ============================== */
import React from 'react'

export default (props) =>{
    if (props.test){
        return props.children
    }else{
        return false
    }
}