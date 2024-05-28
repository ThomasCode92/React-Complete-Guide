export default function ProjectsSidebar() {
  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
        Your Projects
      </h2>
      <div>
        <button className="rounded-md bg-stone-700 px-4 py-2 text-xs text-stone-400 hover:bg-stone-600 hover:text-stone-100 md:text-base">
          Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
