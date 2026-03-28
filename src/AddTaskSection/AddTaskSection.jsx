import { useState } from "react";

const AddTaskSection = ({ todoList, setTodoList }) => {
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState("low");
  const addTaskHandler = () => {
    if (inputValue) {
      setTodoList(() => {
        return [
          ...todoList,
          {
            id: Math.random(),
            priority,
            task: inputValue,
            completed: false,
          },
        ];
      });
      setInputValue("");
    }
  };

  return (
    <section className="add-task-section w-full my-5 lg:my-10 px-4 ">
      <div className="border border-gray-300 rounded-2xl p-4 max-w-5xl mx-auto bg-white overflow-hidden">
        <div className="add-task-section-content w-full rounded-lg space-y-2">
          <h2 className="font-semibold text-md text-[#6c63ff]">
            What do you need to add ?
          </h2>

          <input
            // setting up the input value and onChange handler to update the state
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-1 border bg-[#f7f7ff] border-gray-300 text-lg text-[#bbb8dd] font-semibold rounded-xl px-4 "
            placeholder="Type your task here..."
            type="text"
          />
          <div className="flex flex-row md:gap-4 gap-2 mt-1">
            <select
              className="bg-[#f7f7ff] priority-section border-2 border-[#dddaff] text-black font-bold py-2 px-4 rounded-xl w-1/3 focus:border-[#6c63ff]"
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button
              onClick={() => {
                addTaskHandler();
              }}
              className="border border-gray-300 text-black font-bold py-2 px-4 rounded-xl w-full cursor-pointer hover:bg-[#f7f7ff] active:bg-[#6c63ff] active:text-white"
            >
              + Add Task
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTaskSection;
