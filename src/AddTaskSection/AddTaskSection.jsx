const AddTaskSection = () => {
  return (
    <div className="add-task-section rounded-2xl p-4 max-w-5xl w-full mx-auto border border-gray-300 mt-10">
      <div className="add-task-section-content w-full border border-gray-300 rounded-lg space-y-2">
        <h2 className="font-semibold text-md">What do you need to add ?</h2>
        <input
          className="w-full p-1 border border-gray-300 text-lg text-gray-800 font-semibold rounded "
          placeholder="Type your task here..."
          type="text"
        />
        <div className="flex flex-row md:gap-4 gap-2">
          <select className="priority-section border border-gray-400 text-black font-bold py-2 px-4 rounded-xl w-1/3">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button className="border border-gray-400 text-black font-bold py-2 px-4 rounded-xl w-full cursor-pointer hover:bg-gray-200 transition duration-300 ">
            + Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskSection;
