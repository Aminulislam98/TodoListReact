import React from "react";
import { RxCross2 } from "react-icons/rx";

const Card = ({ todo }) => {
  const priority = {
    Low: "border-l-5 border-[#6c63ff]",
    Medium: "border-l-5 border-[#ffa94d]",
    High: "border-l-5  border-[#ff6b6b]",
  };
  const priorityText = {
    Low: " text-[#6c63ff]",
    Medium: " text-[#ffa94d]",
    High: " text-[#ff6b6b]",
  };
  return (
    <div
      className={`rounded-2xl px-5 py-3 bg-white flex flex-row justify-between space-x-8 ${priority[todo.priority]}`}
    >
      {/* checkbox */}
      <div className="flex flex-row gap-3 justify-center items-center">
        <div>
          <input
            type="checkbox"
            // defaultChecked
            className="checkbox checkbox-primary w-7 h-7"
          />
        </div>
        <div>
          <h2 className="text-[#1a1a2e] text-base font-semibold">
            {todo.task}
          </h2>
          <div className="text-[#aaa8cc] text-sm flex flex-row gap-2 mt-1">
            <p className={`${priorityText[todo.priority]}`}>
              {todo.priority} priority
            </p>
            <div className="flex flex-row gap-1">
              <p>{todo.day}</p>•<p> {todo.time}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            deleteTodo(todo);
          }}
          className="btn bg-[#f7f7ff] hover:bg-red-100 hover:text-red-800 hover:border-red-400"
        >
          <RxCross2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Card;
