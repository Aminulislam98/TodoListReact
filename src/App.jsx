import AddTaskSection from "./AddTaskSection/AddTaskSection.jsx";
import "./App.css";
import Navbar from "./navbar/Navbar.jsx";

function App() {
  // const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Navbar></Navbar>
      <AddTaskSection
      // todoList={todoList}
      // setTodoList={setTodoList}
      ></AddTaskSection>
    </div>
  );
}

export default App;
