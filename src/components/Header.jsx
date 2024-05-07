import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="mb-16 mt-8 flex flex-col items-center">
      <img
        src={logo}
        alt="A canvas"
        className="mb-8 h-44 w-44 object-contain"
      />
      <h1 className="text-center font-title text-4xl font-semibold uppercase tracking-widest text-amber-800">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
