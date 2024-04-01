import React from "react";
import AddBtn from "./AddBtn";

const AddItem = ({ add, setAdd , handleSubmit }) => {
  return (
    <div className="mt-12 lg:flex justify-around gap-10 mb-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task"
          className=" w-full lg:w-96 h-20 rounded-lg shadow-md p-8 outline-none border border-black text-black"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
       
      </form>
      <AddBtn handleSubmit={handleSubmit}/>
    </div>
  );
};

export default AddItem;
