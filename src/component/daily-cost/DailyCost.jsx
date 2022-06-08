import React, { useState } from 'react';
import useStorageData from '../../hook/StorageData';
import AddFood from './add-food/AddFood';
import Card from './card/Card';
import './daily-cost.css'
import { format } from 'date-fns'

const DailyCost = () => {
    const [data, putData] = useStorageData('dailydata')
    console.log(data)
    const addDailyData = (data) => {
        data.date = format(new Date(),'MM/dd/yyyy').toString()
        putData(data)
    }
    return (
        <div className='cost'>
            <div className='left-content'>
                <AddFood add={addDailyData} />
            </div>
            <div className='right-content'>
                <h1>購入履歴</h1>
                <div className='card-container'>
                    {
                        data.length > 0 ? data.map((i, index) => <Card item={i} key={index} />) : <></>
                    }
                </div>
            </div>

        </div>
    );
}


export default DailyCost;