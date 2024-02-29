import React, { useRef, useState } from "react";

const NewProject = ({
  title,
  description,
  dueDate,
  id,
  handleDeleteProject,
}) => {
  const addTask = useRef();
  let count = useRef(0);
  const [Task, setTask] = useState([]);

  function generateUniqueKey(prefix = "key") {
    const timestamp = new Date().getTime();
    count.current = count.current + 1;
    // alert(`${prefix}_${count.current}${timestamp}`);
    return `${prefix}_${count.current}${timestamp}`;
  }

  function handleAddTask(title) {
    const newTask = {
      title,
      id: generateUniqueKey("Task"),
    };
    setTask((previous) => [...previous, newTask]);
    addTask.current.value = "";
  }

  return (
    <>
      <div className="flex flex-col space-x-9">
        <div className="flex font-bold text-center space-x-72">
          <h1 className="mx-3 text-3xl ">{title}</h1>
          <h2 className="text-gray-500">{dueDate}</h2>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => handleDeleteProject(id)}
          >
            Delete
          </button>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <h2 className="font-semibold">{description}</h2>
        <div className="">
          <h1 className="my-12  font-bold text-3xl">Tasks</h1>
          <div className="w-full ">
            <div className="relative w-full min-w-[200px] h-10">
              <form>
                <input
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                  ref={addTask}
                  required
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Add Task
                </label>
                <button
                  type="submit"
                  className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 my-6"
                  onClick={() => {
                    addTask.current.value
                      ? handleAddTask(addTask.current.value)
                      : undefined;
                  }}
                >
                  Add Task
                </button>
              </form>
              {Task.length === 0 ? (
                <p className="font-semibold">
                  This Project Does not have any Tasks Yet
                </p>
              ) : (
                Task.map((task) => (
                  <div key={task.id} className="flex gap-x-96">
                    <h3>{task.title}</h3>
                    <button
                      className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={() => handleRemove(task)}
                    >
                      Clear
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProject;
