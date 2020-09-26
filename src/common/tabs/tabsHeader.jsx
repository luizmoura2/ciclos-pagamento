/* ============================== */
/* File: tabsHeader.jsx */
/* Author: Luiz Moura */
/* Email: luizmoura2@hotmail.com */
/* © Copyright 26/09/2020 12:52 */
/* ============================== */
import React from 'react'

export default (props) =>{
    return (
      <ul className='nav nav-tabs'>
          {props.children}
      </ul>
    )
}