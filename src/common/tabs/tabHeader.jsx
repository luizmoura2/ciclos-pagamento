/* ============================== */
/* File: tabHeader.jsx */
/* Author: Luiz Moura */
/* Email: luizmoura2@hotmail.com */
/* © Copyright 26/09/2020 14:57 */
/* ============================== */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabActions'
import If from '../operador/If'

class TabHeader extends Component{
    
    render(){
        const selected = (this.props.tab.selected === this.props.target)? 'active': ''
        const visible = this.props.tab.visible[this.props.target]
        return (
            <If test={visible}>
                <li className ={selected}>
                    <a href="javascript:;"
                        data-toggle='tab'
                        onClick={() => this.props.selectTab(this.props.target)} 
                        data-target={this.props.target}>
                            <i className={`fa fa-${this.props.icon}`}></i>
                            {this.props.label}
                        </a>
                </li>
            </If>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch )
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)