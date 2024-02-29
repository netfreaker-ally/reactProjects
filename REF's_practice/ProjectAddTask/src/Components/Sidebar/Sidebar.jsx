import { useRef, useState } from "react";
import AddProject from "./AddProject";
import NewProject from "./NewProject";

export default function SideBar() {
  const [showAddProject, setShowAddProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  function generateUniqueKey(prefix = "key") {
    const timestamp = new Date().getTime();

    return `${prefix}_${timestamp}`;
  }
  function handleSave(title, description, dueDate) {
    const newProject = {
      title,
      description,
      dueDate,
      id: generateUniqueKey("project"),
    };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setShowAddProject(false);
  }
  function handleDeleteProject(projectId) {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectId)
    );
    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject(null);
    }
  }

  return (
    <div className="flex">
      <div className="bg-black w-1/4 h-screen">
        <h1 className="text-white text-center text-3xl uppercase font-bold rounded-sm">
          Your Projects
        </h1>
        <button
          className="text-white my-40 mx-6 bg-slate-600 font-semibold rounded text-lg p-3"
          onClick={() => setShowAddProject(true)}
        >
          +Add Project
        </button>
        {projects.map((project) => (
          <button
            key={project.id}
            className="text-white my-2 mx-6 bg-slate-600 font-semibold rounded text-lg p-3"
            onClick={() => {
              setShowAddProject(false);
              setSelectedProject(project);
            }}
          >
            {project.title}
          </button>
        ))}
      </div>

      <div>
        {showAddProject && (
          <AddProject
            setShowAddProject={setShowAddProject}
            handleSave={handleSave}
          />
        )}
      </div>

      {selectedProject && !showAddProject && (
        <NewProject
          title={selectedProject.title}
          description={selectedProject.description}
          dueDate={selectedProject.dueDate}
          id={selectedProject.id}
          handleDeleteProject={handleDeleteProject}
        />
      )}
    </div>
  );
}
