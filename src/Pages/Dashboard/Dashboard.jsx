import React from 'react'
import useDashboardApis from './DashboardApis'


const Dashboard = () => {
    const { getHomePageData } = useDashboardApis();

    return (
        <div>Dashboard <button onClick={() => getHomePageData()} >added</button></div>
    )
}

export default Dashboard