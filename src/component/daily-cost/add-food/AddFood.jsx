import { useState } from 'react';
import foods from '../../../assets/JsonData/food.json'
import './add-food.css'
const AddFood = ({add}) => {
    const [selectId, setSelectId] = useState(foods.Rau[0].id)
    const [dailyData,setDailyData] = useState({date:null,listFood:[]})
    const handleAddFood = (id)=>{
        let tmp = [...foods.Ca,...foods.Rau,...foods.Thit].filter(i => i.id == id)
        setDailyData({...dailyData,['listFood']:[...dailyData.listFood,tmp[0]]})
    }
    return (
        <div>
            <div className='form-input'>
                <select className="" value={selectId} onChange={(e)=>setSelectId(e.target.value)}>
                    {foods.Rau.map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
                    {foods.Thit.map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
                    {foods.Ca.map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
                </select>
                <button onClick={()=>handleAddFood(selectId)}><i class="fa fa-plus" aria-hidden="true"></i>Thêm nguyên liệu</button>
            </div>
            <div className='list-food'>
                <h2>Danh sách nguyên liệu</h2>
                {
                    dailyData.listFood.map((i,index) => (
                        <p className='food-item' key={index}>
                            <span className='id'>{index+1}</span>
                            <span className='content'>{i.name}</span>{i.price}
                            <span className="unit">VND</span>
                        </p>
                    ))
                }
            </div>
            <button className='save' onClick={()=>{add(dailyData);setDailyData({date:null,listFood:[]})}}>Save</button>
        </div>
    );
}

export default AddFood;