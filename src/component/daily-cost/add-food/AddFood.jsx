import { useState } from "react";
import foods from "../../../assets/JsonData/food.json";
import "./add-food.css";
const AddFood = ({ add }) => {
  const [selectId, setSelectId] = useState(foods.Rau[0].id);
  const [dailyData, setDailyData] = useState({ date: null, listFood: [] });
  const handleAddFood = (id) => {
    let tmp = [...foods.Ca, ...foods.Rau, ...foods.Thit].filter(
      (i) => i.id == id
    );
    setDailyData({
      ...dailyData,
      ["listFood"]: [...dailyData.listFood, tmp[0]],
    });
  };
  return (
    <div className="add-food">
      <div className="form">
        <select
          className="rounded-border"
          value={selectId}
          onChange={(e) => setSelectId(e.target.value)}
        >
          {foods.Rau.map((i) => (
            <option key={i.id} value={i.id}>
              {i.name}
            </option>
          ))}
          {foods.Thit.map((i) => (
            <option key={i.id} value={i.id}>
              {i.name}
            </option>
          ))}
          {foods.Ca.map((i) => (
            <option key={i.id} value={i.id}>
              {i.name}
            </option>
          ))}
        </select>
        <button
          onClick={() => handleAddFood(selectId)}
          className="rounded-border"
        >
          <i class="fa fa-plus" aria-hidden="true"></i>料理を追加
        </button>
      </div>
      <h5>選んだ料理</h5>
      <div className="list-food">
        {dailyData.listFood.length > 0 ? (
          dailyData.listFood.map((i, index) => (
            <p className="food-item" key={index}>
              <span className="id">{index + 1}</span>
              <span className="content">{i.name}</span>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(i.price)}
              {/* <span className="unit">VND</span> */}
            </p>
          ))
        ) : (
          <p>ありません。</p>
        )}
      </div>
      <button
        className="save"
        onClick={() => {
          add(dailyData);
          setDailyData({ date: null, listFood: [] });
        }}
      >
        保存
      </button>
      <button
        className="delete"
        onClick={() => {
          setDailyData({ date: null, listFood: [] });
        }}
      >
        消除
      </button>
    </div>
  );
};

export default AddFood;
