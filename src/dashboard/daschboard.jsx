/* ============================== */
/* File: reducers.js */
/* Author: Luiz Moura */
/* Email: luizmoura2@hotmail.com */
/* © Copyright 22/09/2020 09:32 */
/* ============================== */
import React, { Component } from 'react'
import { connect } from "react-redux";

/** Liga o arquivo de action creatores ao reducer */
import { bindActionCreators } from 'redux'
/** Arquivo dos actions creatores a serem ligados ao reducer */
import { getSummary } from './dashboardAction'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widgets/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component{

    getSnapshotBeforeUpdate(){
        //this.props.getSummary()
    }
    componentWillMount(){
        this.props.getSummary()
    }
    
    render (){
        /** A parâmetro 'props.summary' foi trazido da integração do
         * objeto desta class Dashboard com o 'main/reducers.js' atavés
         * do método da const 'mapStateToProps', declarado no final deste 
         * arquivo, e integrado através do método 'connect()'
         */
        const { credit, debt } = this.props.summary
        return(
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
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
/* A const mapStateToProps propõe retornar na função 'state' que vai 
* no reducer declararado na pasta <main/reducers.js> e traz para o objeto
* desta class Dashboard o objeto summary com os seus atributo e valores
* summary:{credit= ?, debt: ?*/
const mapStateToProps = state =>( { summary: state.dashboard.summary } )

/** Integra o action crator 'getSummary' que esta no arquivo dashboardAction.js
 * ao dashboardReducer.js através do -dispatch- que chama todos os reducers
 * que estão configurados na const rootReducers, no arquivo main/reducers */
const mapDispatchProps = dispatch => bindActionCreators( { getSummary }, dispatch )

/* Conecta o objeto desta class Dashboard integrando ao  <main/reducers.js>
* para a busca * do objeto 'summary' declarado na função da const 
* mapStateToProps*/
export default connect(mapStateToProps, mapDispatchProps)(Dashboard)