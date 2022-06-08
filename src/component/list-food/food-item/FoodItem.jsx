import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { useState } from "react";
import food from "../../../assets/JsonData/food.json";
const { Meta } = Card;


function PrintItem(props){
  
  let foo = props.x
  // let kk = props.y
  return(
    foo.map((item) =>{
      return(
       <Card  key={item.id}
       className="col-3"
         hoverable
         style={{
           width: 240,
           margin: 10,
         }} 
      
         cover={
           <img
             alt="example"
             src={item.image}
           />
         }
       >
         <Meta title={item.name} description={item.price} />
       </Card>
   )})
  )
} 

// const tabListNoTitle = [
//   {
//     key: "all",
//     tab: "all name",
//   },
//   {
//     key: "rau",
//     tab: "rau name",
//   },
//   {
//     key: "thit",
//     tab: "thit name",
//   },
//   {
//     key: "ca",
//     tab: "ca name",
//   }
 

// ];
// const contentListNoTitle = {


//   all:(
//     <div className="container-fluid">
//       <div className="row">
//         <PrintItem x={food.Rau} />,
//         <PrintItem x={food.Thịt} />,
//         <PrintItem x={food.Cá} />,
//         <PrintItem x={food.Cá} />,
//       </div>
    
    
    
//   </div>
//   ),
//   rau: (
//       <div className="d-flex justify-content-space">
//         {
//           <PrintItem x={food.Rau} />
//         }
//       </div>
//   ),
//   thit: (
//     <div className="d-flex justify-content-space">
//     {
//       <PrintItem x={food.Thịt} />
//     }
//   </div>
//   ),
//   ca: (
//     <div className="d-flex justify-content-space">
//     {
//        <PrintItem x={food.Cá} />
  
//     }
//   </div>
//   )
  
// };

// const FoodItem = () => {
//   const [activeTabKey2, setActiveTabKey2] = useState("all");
//   const onTab2Change = (key) => {
//     setActiveTabKey2(key);
//   };

//   return (
//     <div className="d-flex">
//      {/* {console.log(food)} */}
//       <Card
//         style={{
//           width: "100%",
//         }}
//         tabList={tabListNoTitle}
//         activeTabKey={activeTabKey2}
//         // tabBarExtraContent={<a href="#">More</a>}
//         onTabChange={(key) => {
//           onTab2Change(key);
//         }}
//       >
//         {contentListNoTitle[activeTabKey2]}
//       </Card>
//     </div>
//   );
// };

export default PrintItem;
