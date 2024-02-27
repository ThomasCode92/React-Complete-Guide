export default function TabButton({ children }) {
  function handleClick() {
    console.log('TabButton clicked');
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
