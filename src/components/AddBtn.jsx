import React from 'react'

const AddBtn = ({handleSubmit}) => {
  return (
    <div>
        <button
        className="w-[105px] h-[55px] bg-[black] rounded-lg text-white cursor-pointer mt-4"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  )
}

export default AddBtn



