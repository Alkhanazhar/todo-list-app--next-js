"use client";
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Todo from "./Todo";
const page = () => {
  const [todoList, settodolist] = useState([]);
  const [text, settext] = useState("");
  const [desc, setdesc] = useState("");

  const handleFilter = (index) => {
    const obj = [...todoList];
    obj.splice(index, 1);
    settodolist(obj);
  };
  // let render = <h1>no task available</h1>;
  // let render2 = 

  return (
    <div>
      <Header />
      <div className="mx-auto sm:w-4/5 xl:w-3/5 my-4 flex-col justify-center items-center gap-10 ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            text.length > 0
              ? settodolist([...todoList, { text, desc }])
              : settodolist([...todoList]);
            setdesc("");
            settext("");
          }}
          className="flex gap-5 justify-center items-center"
        >
          <input
            type="text"
            className="px-2 py-2 my-5 border border-zinc-700 w-2/5"
            placeholder="Enter a task here"
            value={text}
            onChange={(e) => {
              settext(e.target.value);
            }}
          />
          <input
            type="text"
            className="px-2 py-2 my-5 border border-zinc-700 w-2/5"
            placeholder="Enter a description here"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button className="border bg-zinc-700 text-white px-2 rounded font-bold shadow-md w-1/5 h-[45px]">
            Add task
          </button>
        </form>
      </div>
      <div className="border border-black bg-purple-800 text-white p-8 sm:w-4/5 xl:w-3/5 m-auto shadow-inner items-center justify-center my-10">
        {/* {todoList.length > 0 ? render2 : render} */}
       {todoList.map((todo)=>
       <Todo todotext={todo.text} tododesc={todo.desc} handleFilter={handleFilter}/>

       ) }
      </div>
      <Footer />
    </div>
  );
};

export default page;
