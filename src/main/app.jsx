import '../common/template/dependences'
import React from 'react'
const  path = require('path')

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Routes from './routes'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
    </div>
)