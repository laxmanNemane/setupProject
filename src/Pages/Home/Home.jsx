import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWeekData } from '../../Helper/constantString';
import { Checkbox } from 'antd';
const yourItemsArray = [{
    title:"title teh here",
    id:1
},{
    title:"Nice teh here",
    id:2
}]

const Home = () => {
    const [homeData, setHomeData] = useState({
        weekData: [],
        selectedDates: {},
    });

    const navigate = useNavigate();

    useEffect(() => {
        const weeks = getWeekData();
        setHomeData((prev) => ({ ...prev, weekData: weeks }));
    }, []);

    const handleCheckboxChange = (itemName, date) => {
        setHomeData((prev) => {
            const selectedDates = { ...prev.selectedDates };
    
            if (!selectedDates[itemName]) {
                selectedDates[itemName] = [];
            }
    
            const index = selectedDates[itemName].indexOf(date);
            if (index !== -1) {
                selectedDates[itemName] = [
                    ...selectedDates[itemName].slice(0, index),
                    ...selectedDates[itemName].slice(index + 1),
                ];
            } else {
                selectedDates[itemName] = [...selectedDates[itemName], date];
            }
    
            return {
                ...prev,
                selectedDates,
            };
        });
    };
    


    return (
        <div className='flex flex-col gap-4'>
            <h4 className='w-full text-center text-2xl font-semibold'>
                Lorem ipsum dolor sit.
            </h4>
            <div className='table-list-menu'>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>image</th>
                            <th>selectedday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {yourItemsArray.map((item) => (
                            <tr key={item.name}>
                                <td>{item.title}</td>
                                <td>
                                    <img
                                        className='w-[30px] h-[30px] '
                                        src={item.image}
                                        alt=''
                                    />
                                </td>
                                <td>
                                    {homeData.weekData.map((day) => (
                                        <Checkbox
                                            key={day}
                                            value={day}
                                            onChange={() =>
                                                handleCheckboxChange(
                                                    item.title,
                                                    day
                                                )
                                            }
                                        />
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="submitButton text-center w-full">
                <button className='border py-1 px-4 rounded' type='button' disabled={false} >Submit</button>
            </div>
        </div>
    );
};

export default Home;
