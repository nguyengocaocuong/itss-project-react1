import { useState } from "react";
import foods from '../../assets/JsonData/food.json'
import FoodItem from "./food-item/FoodItem";
 const ListFood = () => {
     const [listFood,setListFood] = useState(foods)
    return (
        <div>
  
        </div>
    )
}

export default ListFood;