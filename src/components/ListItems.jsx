import React from "react";
import DeleteBtn from "./DeleteBtn";

const ListItems = ({ items, handleCheck , handleDelete }) => {
 
  return (
    <div>
      {items.map((item) => (
        <ul
          key={item.id}
          className="w-full p-10 lg:flex justify-center text-center gap-1 border border-black rounded-lg lg:mb-2 mb-8 mt-10"
        >
          <li className="mb-8 lg:mb-0">{item.task}</li>
          <div className="read flex justify-center gap-1 p-1 mb-8 lg:mb-0">
            <input
              type="checkbox"
              checked={item.Check}
              onChange={() => handleCheck(item.id)}
              className="w-44 h-12 border cursor-pointer border-black rounded-lg"
            />
          </div>
          <DeleteBtn handleDelete={() => handleDelete(item.id)} />
        </ul>
      ))}
    </div>
  );
};

export default ListItems;
