import React from "react";

const Note = ({ id, text, year, month, date, editHandler, deleteHandler }) => {
  return (
    <div className="mb-5 bg-white bg-opacity-10 shadow-inset -6px -4px 2px rgba-white-30 rounded-md border border-white border-opacity-33 text-white p-[15px] min-h-[140px] flex justify-between break-words flex-col">
      <div>{text}</div>

      <div className=" flex gap-3 mt-4">
        <div className="flex gap-3 w-1/2">
          <button
            onClick={() => deleteHandler(id)}
            className=" bg-transparent transition-all duration-100 ease-in-out rounded-sm text-white px-[10px] py-[4px] text-[13px] cursor-pointer border border-white border-opacity-33 hover:bg-red-500"
          >
            Delete
          </button>
          <button
            onClick={() => editHandler(id, text)}
            className=" bg-transparent transition-all duration-100 ease-in-out rounded-sm text-white px-[10px] py-[4px] text-[13px] cursor-pointer border border-white border-opacity-33 hover:bg-green-500"
          >
            Edit
          </button>
        </div>

        <div
          className=" w-1/2 flex justify-center text-[13px]  items-center
        "
        >
          {date}/{month}/{year}
        </div>
      </div>
    </div>
  );
};

export default Note;
