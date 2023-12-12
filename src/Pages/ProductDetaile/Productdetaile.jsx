import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Productdetaile = () => {
    const navigate = useNavigate();
    return (
        <div className='px-2 pt-2' >
            <div className="product-header flex justify-between py-2">
                <div className='hover:bg-light-primary-lightThree p-2 rounded-full' onClick={() => navigate("/")}><IoMdArrowRoundBack /></div>
                <span></span>
            </div>
            <div className="producat_info w-full border-b pb-3">

                <img className='w-full h-[200px]  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDo0195Jjvws3r1Dt7QzSVg-Ei22m9Z6KR4A&usqp=CAU" alt="" />
                <div className="desciption-product">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>100 rupees 60 rupes</p>
                </div>
            </div>

            <div className="suggestion_list-products">
                <ul className="suggestion-list-product py-2">
                    {[1, 2, 3, 4, 5].map((item) => {
                        return <li key={item} className='flex gap-2 mb-2 items-center'>
                            <img className='w-[120px] h-[100px]  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDo0195Jjvws3r1Dt7QzSVg-Ei22m9Z6KR4A&usqp=CAU" alt="" />
                            <div >
                                <h3 className='font-semibold'>Lorem ipsum isbejdns</h3>
                                <p className='suggestion-product-descripton'>
                                    {"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nemo excepturi nesciunt!".slice(0, 50)}
                                </p>
                            </div>
                        </li>
                    })}
                </ul>
            </div>


        </div>
    )
}

export default Productdetaile