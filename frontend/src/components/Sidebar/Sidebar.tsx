import React, { useState } from 'react'
import AccountToogle from './SideContent/AccountToogle'
import Search from './SideContent/Search'
import SubTab from './SideContent/SubTab'

const Sidebar: React.FC = () => {
    const [headTab, setHeadTab] = useState("Menu");

    return (
        <div>
            <AccountToogle />
            <Search />
            <SubTab headTab={headTab} setHeadTab={setHeadTab}/>
        </div>
    )
}

export default Sidebar