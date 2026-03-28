const AddTaskSection = () => {
  return (
    <div className="add-task-section rounded-2xl p-2">
      <div>
        <h2>What do you need to add ?</h2>
        <input
          className="p-1 border border-t-gray-400 text-lg text-gray-500 font-semibold "
          placeholder="Type your task here..."
          type="text"
        />
      </div>
    </div>
  );
};

export default AddTaskSection;
