/* ============================== */
/* File: tabsContents.jsx */
/* Author: Luiz Moura */
/* Email: luizmoura2@hotmail.com */
/* © Copyright 26/09/2020 12:53 */
/* ============================== */
import React from 'react'

export default (props) =>{
    return (
      <div className='tab-content'>
           {props.children}
      </div>
    )
}