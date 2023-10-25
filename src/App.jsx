import { useState } from "react";

import { ProjectSideBar } from "./components/ProjectSideBar";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (projectdata) => {
    const newProject = {
      ...projectdata,
      id: Math.random(),
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  console.log(projectState);

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
