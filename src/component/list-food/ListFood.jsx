import { useState } from "react";

import PrintItem from "./food-item/FoodItem";
import "antd/dist/antd.css";
import { Card } from "antd";
import {ca, thit, Rau} from "../../assets/JsonData/data" 

import food from "../../assets/JsonData/food.json";
const { Meta } = Card;





 const ListFood = () => {
   const [hien, setHien] = useState(true);
     const [hieu,setListFood] = useState(food);
    const tabListNoTitle = [

        {
          key: "all",
          tab: "all name",
        },
        {
          key: "rau",
          tab: "rau name",
        },
        {
          key: "thit",
          tab: "thit name",
        },
        {
          key: "ca",
          tab: "ca name",
        }
       
      
      ];
      const contentListNoTitle = {
        all:(
          <div className="container-fluid">
         
          { hien == true ?  ( 
             <div className="row">
              <PrintItem x={ca} />,
              <PrintItem x={thit} />,
              <PrintItem x={Rau} />,
              </div>
            ) : (
            <div className="row">
              <Test />
            </div>
          )
         } 
        
      </div>
         
        ),
        rau: (
            <div className="d-flex justify-content-space">
              {
                <PrintItem x={Rau} />
              }
            </div>
        ),
        thit: (
          <div className="d-flex justify-content-space">
          {
            <PrintItem x={thit} />
          }
        </div>
        ),
        ca: (
          <div className="d-flex justify-content-space">
          {
             <PrintItem x={ca} />
        
          }
        </div>
        )
        
      };
      
      const [activeTabKey2, setActiveTabKey2] = useState("all");
      const onTab2Change = (key) => {
        setActiveTabKey2(key);
      };
  
      function Test(props){
        
        Rau.map(item=>{

          return(
            item.name.includes(props.xx) ? (
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
            ):"ko co san pham"
        )})
            
           
      }
      const handle = (event)=>{
       
        if(event.key === "Enter"){
         
          
          <Test xx={event.target.value} />
          console.log("vao day")
        }
        else{
          
        }
    }
      
      
      return (
        <div className="d-flex">
         {console.log("ca: ", ca[1])}
          <Card
            style={{
              width: "100%",
            }}
            tabList={tabListNoTitle}
            activeTabKey={activeTabKey2}
            tabBarExtraContent={ <input onKeyPress={handle}/>}
            onTabChange={(key) => {
              onTab2Change(key);
            }}
          >
            {contentListNoTitle[activeTabKey2]}
          </Card>
          <div>
             
          </div>
        </div>
      );
}

export default ListFood;