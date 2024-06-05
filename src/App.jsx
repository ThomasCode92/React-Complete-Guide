import { useState } from 'react';

import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import SelectedProject from './components/SelectedProject';

export default function App() {
  const [projectsData, setProjectsData] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const selectedProject = projectsData.projects.find(
    project => project.id === projectsData.selectedProjectId,
  );

  function handleStartAddProject() {
    setProjectsData(prevState => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function handleCancelAddProject() {
    setProjectsData(prevState => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  function handleSelectProject(projectId) {
    setProjectsData(prevState => {
      return { ...prevState, selectedProjectId: projectId };
    });
  }

  function handleAddProject(projectData) {
    setProjectsData(prevState => {
      const projectId = Math.random();
      const newProject = { ...projectData, id: projectId };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content = <SelectedProject project={selectedProject} />;

  if (projectsData.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectsData.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="my-8 flex h-screen gap-8">
      <ProjectsSidebar
        projects={projectsData.projects}
        selectedProjectId={projectsData.selectedProjectId}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}
