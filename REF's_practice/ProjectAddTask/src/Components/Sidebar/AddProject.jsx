import { useRef } from "react";

const AddProject = ({ setShowAddProject, handleSave }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
 
  return (
    <div>
      <form
        className="ml-40 flex flex-col w-1/2 bg-slate-50 font-semibold gap-9 leading-7"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label>
            TITLE <input ref={title} type="text" required />
          </label>
        </div>
        <div>
          <label>
            DESCRIPTION <textarea ref={description} required />
          </label>
        </div>

        <div>
          <label>DUE DATE</label>
          <input ref={dueDate} type="date" required />
        </div>
        <div className="flex gap-6">
          <button
            className="bg-slate-200 p-3 rounded"
            onClick={() => setShowAddProject(false)}
          >
            Cancel
          </button>
          <button
            className="bg-black text-white p-3 rounded"
            onClick={() => {
              handleSave(
                title.current.value,
                description.current.value,
                dueDate.current.value
              );
              setShowAddProject(false);
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
