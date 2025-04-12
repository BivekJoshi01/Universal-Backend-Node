import React from 'react'
import Topbar from './DashboardContent/Topbar'
import Grid from './DashboardContent/Grid'

const AdminDashboard:React.FC = () => {
  return (
    <div>
        <Topbar/>
        <Grid/>
    </div>
  )
}

export default AdminDashboard