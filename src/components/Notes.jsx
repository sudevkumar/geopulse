import React from "react";

const Notes = ({ setText, text, textHandler }) => {
  const char = 200;
  const charCount = char - text.length;

  return (
    <div className=" mb-10 bg-white bg-opacity-10 shadow-inset -6px -4px 2px rgba-white-30 rounded-md border border-white border-opacity-33 text-white p-[15px] min-h-[140px] flex justify-between break-words flex-col">
      <textarea
        name=""
        id=""
        cols="10"
        rows="5"
        placeholder="Type...."
        maxLength={200}
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="  bg-transparent text-white resize-none font-[17px] outline-none placeholder:text-white"
      ></textarea>
      <div className=" flex items-center justify-between mb-[10px]">
        <span className={charCount === 0 ? " text-red-900" : "text-green-700"}>
          {charCount} lefts
        </span>
        <button
          className=" bg-transparent transition-all duration-100 ease-in-out rounded-sm text-white px-[10px] py-[4px] text-[13px] cursor-pointer border border-white border-opacity-33 hover:bg-green-500"
          onClick={textHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Notes;
