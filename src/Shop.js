import React, { useState } from "react";
import AddItem from "./components/AddItem.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [desc, setDesc] = useState("");
  const [val, setVal] = useState(false);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function handleItemsChange(product) {
    setItems([...items, product]);
  }
  function handleItemChange(event) {
    setItem(event.target.value);
  }
  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleFormSubmit(e) {
    setVal(false);
    e.preventDefault();
    const product = {
      id: getRandomInt(0, 1000000),
      name: item,
      desc: desc
    };
    if (product.name === "" || product.desc === "") {
      setVal(true);
    } else {
      setItems([...items, product]);
      setItem("");
      setDesc("");
    }
  }

  function handleDeleteItem(el) {
    setItems(items.filter((e) => e.id !== el.id));
  }

  return (
    <AddItem
      FormSubmit={handleFormSubmit}
      item={item}
      desc={desc}
      items={items}
      val={val}
      setItems={handleItemsChange}
      setDesc={handleDescChange}
      setItem={handleItemChange}
      Delete={handleDeleteItem}
    />
  );
}
