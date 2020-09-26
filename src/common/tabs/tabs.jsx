/* ============================== */
/* File: tabs.js */
/* Author: Luiz Moura */
/* Email: luizmoura2@hotmail.com */
/* © Copyright 26/09/2020 12:48 */
/* ============================== */
import React from 'react'

export default (props) =>{
    console.warn(props)
    return (
      <div className='nav-tabs-custom'>
        {props.children}
      </div>
    )
}