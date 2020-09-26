/* ============================== */
/* File: daschboardV2.jsx */
/* Author: Luiz Moura */
/* Email: luizmoura2@hotmail.com */
/* © Copyright 26/09/2020 12:14 */
/* ============================== */
import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widgets/valueBox'
import Row from '../common/layout/row'

const BASE_URL = 'http://localhost:3003/api'

class Dashboard extends Component{

    constructor(props){
        super()
        this.state = {
            credit: 0,
            debt: 0
        }
    }

    componentWillMount(){
        axios.get(`${BASE_URL}/billingCycles/summary`)
        .then(resp => this.setState(resp.data))
        
    }
    
    render (){
        /** A parâmetro 'props.summary' foi trazido da integração do
         * objeto desta class Dashboard com o 'main/reducers.js' atavés
         * do método da const 'mapStateToProps', declarado no final deste 
         * arquivo, e integrado através do método 'connect()'
         */
        const { credit, debt } = this.state
        return(
            <div>
                <ContentHeader title='Dashboard' small='Versão 2.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='bank'
                            value={`R$ ${credit-debt}`} text='Valor Consolidade' />
                    </Row>
                </Content>
            </div>
        )
    }
}
export default Dashboard