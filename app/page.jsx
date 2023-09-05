"use client";
import React, { useState } from "react";
const page = () => {
  const [todoList, settodolist] = useState([]);
  const [text, settext] = useState("");
  const [desc, setdesc] = useState("");
  let render = <h1>no task available</h1>;
  let render2 = todoList.map((t, i) => (
    <div className="font-bold capitalize bg-slate-300 p-4 my-2 shadow-lg" key={i}>
      <h1 className="text-4xl">
        {i + 1 + "=>"}
        {t.text}
      </h1>
      <h6>{t.desc}</h6> 
    </div>
  ));
  return (
    <div className="">
      <h1 className="p-5  bg-black text-white text-5xl font-bold text-center">
        Azhar Todo List
      </h1>
      <div className="grid mx-auto sm:w-4/5 xl:w-3/5 my-8 ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            settodolist([...todoList, { text, desc }]);
            console.log(todoList);
            setdesc("");
            settext("");
          }}
          className="px-8"
        >
          <input
            type="text"
            className="px-2 py-2 m-5 border border-zinc-700 "
            placeholder="Enter a task here"
            value={text}
            onChange={(e) => {
              console.log(text);
              settext(e.target.value);
            }}
          />
          <input
            type="text"
            className="px-2 py-2 m-5 border border-zinc-700 "
            placeholder="Enter a description here"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button className="border bg-zinc-700 text-white px-2 py-2 rounded font-bold shadow-md ">
            {" "}
            Add task
          </button>
        </form>
      </div>
      <div className="border border-black bg-slate-400 p-8 sm:w-4/5 xl:w-3/5 m-auto shadow-inner">
        

       { todoList.length > 0 ? render2 : render}
        </div>
        
    </div>
  );
};

export default page;
