import React, { useState } from 'react'
import YourFormComponent from './practiceExamples/TimeTask'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './Layout/User/UserLayout'
import Home from './Pages/Home/Home'
import Productdetaile from './Pages/ProductDetaile/Productdetaile'
import Profile from './Pages/Profile/Profile'

const App = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<UserLayout />} >
                    <Route path='/' element={<Home />} />
                    <Route path='/your' element={<YourFormComponent />} />
                </Route>
                <Route path='/product/:id' element={<Productdetaile />} />
                <Route path='/profile' element={<Profile />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App