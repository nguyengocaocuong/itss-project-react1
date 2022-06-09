import React, { useState } from "react";
import useStorageData from "../../hook/StorageData";
import "antd/dist/antd.css";
import { Card } from "antd";
import AddFood from "./add-food/AddFood";
import MyCard from "./card/Card";
import "./daily-cost.css";
import { format } from "date-fns";

const DailyCost = () => {
  const [data, putData] = useStorageData("dailydata");
  console.log(data);
  const addDailyData = (data) => {
    data.date = format(new Date(), "MM/dd/yyyy").toString();
    putData(data);
  };
  return (
    <Card
      style={{
        width: "100%",
        height: 510,
        borderRadius: 16,
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <div className="cost">
        <div className="left-content">
          <h2>購入計算</h2>
          <AddFood add={addDailyData} />
        </div>
        <div className="right-content">
          <h2>購入履歴</h2>
          <div className="card-container">
            {data.length > 0 ? (
              data.map((i, index) => <MyCard item={i} key={index} />)
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>{" "}
    </Card>
  );
};

export default DailyCost;
