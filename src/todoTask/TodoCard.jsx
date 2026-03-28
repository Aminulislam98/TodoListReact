import React from "react";
import Card from "../UI/Card";

const TodoCard = ({ todoList, setTodoList }) => {
  return (
    <div className="todo-task-section w-full my-5 lg:my-10 px-4 lg:px-0 flex flex-col gap-y-2 max-w-5xl mx-auto">
      {todoList.map((todo) => (
        <Card todo={todo} todoList={todoList} setTodoList={setTodoList}></Card>
      ))}
    </div>
  );
};

export default TodoCard;
