import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";

const { Meta } = Card;


function PrintItem(props){
  
  let foo = props.x
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
             height={150}
           />
         }
       >
         <Meta title={item.name} description={item.price} />
       </Card>
   )})
  )
} 


export default PrintItem;
