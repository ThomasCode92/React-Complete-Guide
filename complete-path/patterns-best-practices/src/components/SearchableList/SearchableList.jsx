export default function SearchableList({ items }) {
  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search..." />
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item.toString()}</li>
        ))}
      </ul>
    </div>
  );
}
