import React, { useState } from 'react'

const Todo = ({todotext,tododesc,index,handleFilter}) => {

    const [line,setline]=useState(false)
  return (
    <>
 
    <div
      className="flex gap-8 justify-center items-center font-bold capitalize bg-purple-100 text-black p-4 my-2 shadow-lg "
      key={index}
    >
      <h1 className={`text-2xl ${line?"line-through":""} }`}>
        {todotext}
      </h1>
      <h6>{tododesc}</h6>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded "
        onClick={(todo) => {
          handleFilter(todo);
        }}
      >
        del
      </button>
      <button
        className="p-2 bg-white rounded-full shadow-2xl lin"
        onClick={() => {
          setline(!line);
        }}
      >{line?"✔️":"✖️"}</button>
    </div>
  
    </>
  )
}

export default Todo
