import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getWeekData } from '../../Helper/constantString'
import { Checkbox } from 'antd'

const Home = () => {
    const [HomeData, setHomeData] = useState({
        weekData: [],
        selectedDate: []
    })
    const navigate = useNavigate()
    // weeks are getting
    useEffect(() => {
        const weeks = getWeekData();
        setHomeData((prev) => ({ ...prev, weekData: weeks }));
    }, []);

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

    console.log(HomeData, "HomeData");
    return (
        <div className='flex flex-col gap-4'>
            <h4 className='w-full text-center  text-2xl font-semibold'>Lorem ipsum dolor sit.</h4>
            <div className="table-list-menu">
                <table>
                    <thead>
                        <td>name</td>
                        <td>image</td>
                        <td>selectedday</td>
                    </thead>
                    <tbody>
                        <tr>

                            <td>Lorem, ipsum dolor.</td>
                            <td><img className='w-[30px] h-[30px] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&usqp=CAU" alt="" /></td>
                            <td><Checkbox value="C" onChange={onChange} /> <Checkbox value="C" /> <Checkbox value="C" />  <Checkbox value="C" /> <Checkbox value="C" /> <Checkbox value="C" /> <Checkbox value="C" /> </td>
                        </tr>
                        <tr>

                            <td>Lorem, ipsum dolor.</td>
                            <td><img className='w-[30px] h-[30px] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&usqp=CAU" alt="" /></td>
                            <td><Checkbox value="C" /> <Checkbox value="C" /> <Checkbox value="C" />  <Checkbox value="C" /> <Checkbox value="C" /> <Checkbox value="C" /> <Checkbox value="C" /> </td>
                        </tr>
                        <tr>

                            <td>Lorem, ipsum dolor.</td>
                            <td><img className='w-[30px] h-[30px] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&usqp=CAU" alt="" /></td>
                            <td><Checkbox value="C" /> <Checkbox value="C" /> <Checkbox value="C" />  <Checkbox value="C" /> <Checkbox value="C" /> <Checkbox value="C" /> <Checkbox value="C" /> </td>
                        </tr>
                        <tr>

                            <td>Lorem, ipsum dolor.</td>
                            <td><img className='w-[30px] h-[30px] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&usqp=CAU" alt="" /></td>
                            <td><Checkbox value="C" /> <Checkbox value="C" /> <Checkbox value="C" />  <Checkbox value="C" /> <Checkbox value="C" /> <Checkbox value="C" /> <Checkbox value="C" /> </td>
                        </tr>
                        <tr>

                            <td>Lorem, ipsum dolor.</td>
                            <td><img className='w-[30px] h-[30px] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&usqp=CAU" alt="" /></td>
                            <td><Checkbox value="C" /> <Checkbox value="C" /> <Checkbox value="C" />  <Checkbox value="C" /> <Checkbox value="C" /> <Checkbox value="C" /> <Checkbox value="C" /> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home