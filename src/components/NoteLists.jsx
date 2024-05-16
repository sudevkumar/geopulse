import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import { v4 as uuid } from "uuid";
import Note from "./Note";

const NoteLists = () => {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(null);

  const textHandler = () => {
    if (text.length === 0) {
      return alert("Field can not be empty!");
    }

    if (edit) {
      console.log("object");
      setNotes(
        notes.map((ele) =>
          ele.id === edit
            ? {
                ...ele,
                text: text,
              }
            : ele
        )
      );
    } else {
      setNotes((prev) => [
        ...prev,
        {
          id: uuid(),
          text: text,
          year: new Date().getFullYear(),
          month: new Date().getMonth(),
          date: new Date().getDate(),
        },
      ]);
    }

    setText("");
    setEdit(null);
  };

  const editHandler = (id, text) => {
    setEdit(id);
    setText(text);
    console.log(id);
  };

  const deleteHandler = (id) => {
    const updatedNote = notes.filter((ele) => ele.id !== id);
    setNotes(updatedNote);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Geopulse"));
    console.log(data);
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Geopulse", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className=" w-[90%] m-auto mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {notes?.map((ele) =>
        edit === ele.id ? (
          <Notes setText={setText} text={text} textHandler={textHandler} />
        ) : (
          <Note
            key={ele.id}
            id={ele.id}
            text={ele.text}
            year={ele.year}
            month={ele.month}
            date={ele.date}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        )
      )}
      {edit === null ? (
        <Notes
          setText={setText}
          text={text}
          textHandler={textHandler}
          
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default NoteLists;
