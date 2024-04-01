import React from "react";

const DeleteBtn = ({handleDelete}) => {
  return (
    <div>
      <button
        className="w-[105px] h-[45px] bg-[black] rounded-lg text-white cursor-pointer"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteBtn;
