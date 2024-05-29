import Button from './Button';

export default function ProjectsSidebar() {
  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
        Your Projects
      </h2>
      <div>
        <Button>Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
