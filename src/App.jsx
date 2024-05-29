import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';

export default function App() {
  return (
    <main className="my-8 flex h-screen gap-8">
      <ProjectsSidebar />
      <NoProjectSelected />
    </main>
  );
}
