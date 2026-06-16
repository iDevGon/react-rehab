const inventory = [
  { id: 1, name: "Atlas Jacket", category: "clothing" },
  { id: 2, name: "Trail Mug", category: "gear" },
  { id: 3, name: "Field Notebook", category: "stationery" }
];

export default function Exercise() {
  return (
    <section aria-labelledby="filterable-list-title">
      <h2 id="filterable-list-title">Trip Inventory</h2>

      <div>
        <label htmlFor="item-search">Search items</label>
        <input id="item-search" name="search" type="search" />
      </div>

      <div>
        <label htmlFor="category-filter">Category</label>
        <select id="category-filter" name="category">
          <option value="all">All categories</option>
          <option value="clothing">Clothing</option>
          <option value="gear">Gear</option>
          <option value="stationery">Stationery</option>
        </select>
      </div>

      <ul aria-label="Inventory results">
        {inventory.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>
            <span> {item.category}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
