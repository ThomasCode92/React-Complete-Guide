import { useState } from 'react';

import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import SelectedProject from './components/SelectedProject';

export default function App() {
  const [projectsData, setProjectsData] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const selectedProject = projectsData.projects.find(
    project => project.id === projectsData.selectedProjectId,
  );

  const selectedProjectTasks = projectsData.tasks.filter(
    task => task.projectId === projectsData.selectedProjectId,
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

  function handleDeleteProject() {
    setProjectsData(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          project => project.id !== prevState.selectedProjectId,
        ),
      };
    });
  }

  function handleAddTask(text) {
    setProjectsData(prevState => {
      const taskId = Math.random();
      const projectId = prevState.selectedProjectId;
      const newTask = { id: taskId, projectId, text };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsData(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== taskId),
      };
    });
  }

  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={selectedProjectTasks}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

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
    <main className="flex h-screen gap-8">
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
