import React, { useState } from 'react';
import useStorageData from '../../hook/StorageData';
import AddFood from './add-food/AddFood';
import Card from './card/Card';
import './daily-cost.css'
const DailyCost = () => {
    const [data, putData] = useStorageData('daily-cost')
    const addDailyData = (data) => {
        data.date = new Date()
        putData(data)
    }
    return (
        <div className='cost'>
            <div className='left-content'>
                <AddFood add={addDailyData} />
            </div>
            <div className='right-content'>
                <h1> Lịch sử mua</h1>
                <div className='card-container'>
                    {data.map(i => <Card item={i} />)}
                </div>
            </div>

        </div>
    );
}


export default DailyCost;