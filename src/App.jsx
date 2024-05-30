import { useState } from 'react';

import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';

export default function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjects(prevState => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function handleAddProject(projectData) {
    setProjects(prevState => {
      const projectId = Math.random();
      const newProject = { ...projectData, id: projectId };
      return { ...prevState, projects: [...prevState.projects, newProject] };
    });
  }

  let content;

  console.log(projects);

  if (projects.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} />;
  } else if (projects.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="my-8 flex h-screen gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}
