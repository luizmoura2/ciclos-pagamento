/* ============================== */
/* File: tabContent.jsx */
/* Author: Luiz Moura */
/* Email: luizmoura2@hotmail.com */
/* © Copyright 26/09/2020 15:55 */
/* ============================== */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import If from '../operador/If'

class TabContent extends Component{

    render(){
        const selected = (this.props.tab.selected === this.props.id)? 'active': this.props.active
        const visible = this.props.tab.visible[this.props.id]
        return (
            <If test={visible}>
                <div id={this.props.id}
                    className={`tab-pane ${selected}`}>
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab})
export default connect(mapStateToProps)(TabContent)