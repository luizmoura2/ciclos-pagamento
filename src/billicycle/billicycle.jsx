import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectTab, showTabs } from '../common/tabs/tabActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader'
import TabsContents from '../common/tabs/tabsContents'
import TabHeader from '../common/tabs/tabHeader'
import TabContent from '../common/tabs/tabContent'



class BillingCycle extends Component{
    constructor(props){
        super()
    }

    componentWillMount() {
        this.props.selectTab("tabList")
        this.props.showTabs('tabList', 'tabCreate')
    }

    render(){
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                                <TabHeader label='Listar' icon='bars' target='tabList' />
                                <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                                <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                                <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContents>
                                <TabContent id='tabList' ><h1>Listar</h1></TabContent>
                                <TabContent id='tabCreate' ><h1>Create</h1></TabContent>
                                <TabContent id='tabUpdate' ><h1>Update</h1></TabContent>
                                <TabContent id='tabDelete'  ><h1>Delete</h1></TabContent>
                        </TabsContents>
                    </Tabs>
                </Content>
            </div>
        )
    }
} 

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)
//export default BillingCycle