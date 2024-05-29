import noProjectsImg from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected() {
  return (
    <div className="mt-24 w-2/3 text-center">
      <img
        src={noProjectsImg}
        alt="An empty task list"
        className="mx-auto h-16 w-16 object-contain"
      />
      <h2 className="my-4 text-xl text-stone-500">No Project Selected</h2>
      <p className="mb-4 text-stone-400">
        Select a project or get started with a new one!
      </p>
      <p className="mt-8">
        <Button>Create new project</Button>
      </p>
    </div>
  );
}
