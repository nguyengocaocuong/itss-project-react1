import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";

const { Meta } = Card;

function PrintItem(props) {
  let foo = props.x;
  return foo.map((item) => {
    return (
      <Card
        key={item.id}
        className="col-3"
        hoverable
        style={{
          width: 240,
          margin: 10,
          borderRadius: 16,
        }}
        cover={
          <img
            alt="example"
            src={item.image}
            height={150}
            style={{
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}
          />
        }
      >
        <Meta
          title={item.name}
          description={new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(item.price)}
        />
      </Card>
    );
  });
}

export default PrintItem;
