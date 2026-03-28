import AddTaskSection from "./AddTaskSection/AddTaskSection.jsx";
import "./App.css";
import Navbar from "./navbar/Navbar.jsx";
import TodoCard from "./todoTask/TodoCard.jsx";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);

  return (
    <div>
      <Navbar></Navbar>
      <AddTaskSection
        todoList={todoList}
        setTodoList={setTodoList}
      ></AddTaskSection>
      <TodoCard></TodoCard>
    </div>
  );
}

export default App;
