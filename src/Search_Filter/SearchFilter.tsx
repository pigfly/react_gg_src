import { useState } from 'react';

const items = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Fig',
  'Grape',
  'Honeydew',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
  'Raspberry',
  'Strawberry',
  'Watermelon',
];

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  // filteredItems doesn't need to be a piece of state. Instead, it can be derived from the search term.
  // Deriving a value from another value isn't a side effect, therefore, you can do that directly in the component without needing useEffect.
  // Computed property
  const filteredTerm = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <>
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredTerm.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}
