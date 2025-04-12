import React from 'react'
import StatCards from './StatCards'
import ActivityGraph from './ActivityGraph'
import UsageRadar from './UsageRadar'
import RecentTransaction from './RecentTransaction'

const Grid: React.FC = () => {
    return (
        <div className='px-4 grid gap-3 grid-cols-12 mb-4'>
            <StatCards />
            <ActivityGraph />
            <UsageRadar />
            <RecentTransaction />
        </div>
    )
}

export default Grid