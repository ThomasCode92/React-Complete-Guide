import Button from './Button';

import tw from '../utils/tailwind-template';

export default function ProjectsSidebar({
  projects,
  selectedProjectId,
  onStartAddProject,
  onSelectProject,
}) {
  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map(project => {
          let classes = tw`my-1 w-full rounded-sm px-2 py-1 text-left hover:bg-stone-800 hover:text-stone-200`;

          if (project.id === selectedProjectId) {
            classes = tw`${classes} bg-stone-800 text-stone-200`;
          } else {
            classes = tw`${classes} text-stone-400`;
          }

          return (
            <li key={project.id}>
              <button
                className={classes}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
