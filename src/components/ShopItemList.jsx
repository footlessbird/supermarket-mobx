import React from "react";
import ShopItem from "./ShopItem";

const items = [
  {
    name: "water",
    price: 1.99
  },
  {
    name: "banana",
    price: 3.99
  },
  {
    name: "yogurt",
    price: 6.89
  },
  {
    name: "salmon",
    price: 13.99
  }
];

const ShopItemList = () => {
  const itemList = items.map(item => {
    return <ShopItem {...item} key={item.name} />;
  });
  return <div>{itemList}</div>;
};

export default ShopItemList;
