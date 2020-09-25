import React from 'react'
import MenuItem from './menuItems'
import MenuTree from './menuTree'

export default props=>(
    <ul className='sidebar-menu'>
        <MenuItem path='#/' icon='dashboard' label='Dasboard'/> 
        <MenuTree label='Cadastro' icon='edit' >
            <MenuItem path='#billingCycles' 
                icon='usd' label='Ciclos de Pagamentos' />
        </MenuTree>
    </ul>
)