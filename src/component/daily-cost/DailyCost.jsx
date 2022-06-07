import React,{useState} from 'react';
import AddFood from './add-food/AddFood';
import Card from './card/Card';
import './daily-cost.css'
const DailyCost = () => {
    const [dailyData,setDailyData] = useState([
        
    ])
    const addDailyData = (data)=>{
        data.date = new Date()
        console.log(data)
        setDailyData([...dailyData,data])
    }
    return (
        <div className='cost'>
            <div className='left-content'>
                <AddFood add={addDailyData} />
            </div>
            <div className='right-content'>
                <h1> Lịch sử mua</h1>
                <div className='card-container'>
                   {dailyData.map(i => <Card item={i}/>)}
                </div>
            </div>

        </div>
    );
}


export default DailyCost;