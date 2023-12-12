import React from 'react'
import { MdMenu } from "react-icons/md";


const Header = () => {
    return (
        <div className='flex py-2 px-2 justify-between items-center bg-background shadow '><div className="header-menu"><MdMenu />
        </div>
            <div className="user-profile-image">
                <img className='w-[30px] h-[30px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&usqp=CAU" alt="" />
            </div>
        </div>
    )
}

export default Header