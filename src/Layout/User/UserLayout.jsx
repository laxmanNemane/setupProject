
import React from 'react'
import Header from '../../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

const UserLayout = () => {
    return (
        <div className='position-relative w-full h-[100vh] '>
            <div className='position-sticky top-0 '>

                <Header />
            </div>
            <div className='h-[90vh] py-4 mx-2 '>

                <Outlet />
            </div>
            <div className='position-sticky bottom-0'>

                <Footer />
            </div>
        </div>
    )
}

export default UserLayout