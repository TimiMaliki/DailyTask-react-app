import React from "react";
import ListItems from "./ListItems";
import AddItem from "./AddItem";
import { useState } from "react";
const Content = () => {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("dailyTask")) || []);

 const handleCheck = (id) =>{
    const listItems = items.map((item) =>
      item.id === id ? { ...item, Check: !item.Check} : item
    );
    setItems(listItems);
    localStorage.setItem("dailyTask" , JSON.stringify(listItems))
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem("dailyTask" , JSON.stringify(listItems))
  }

  const [add, setAdd] = useState("")

  const handleAdd = (task) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItems = {id ,  Check: false ,task} 
    const listItems = [...items , myNewItems]
    setItems(listItems)
    localStorage.setItem("dailyTask" , JSON.stringify(listItems))
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      if(!add) return
      handleAdd(add)
      setAdd('')
  }

  return (
    <div className="grid place-content-center">
      <AddItem add={add} setAdd={setAdd} handleSubmit={handleSubmit}/>
      <div className="w-full flex justify-center mt-10">
      <ListItems items={items}  handleCheck={handleCheck} handleDelete={handleDelete} />
      </div>
  
    </div>
  );
};

export default Content;
