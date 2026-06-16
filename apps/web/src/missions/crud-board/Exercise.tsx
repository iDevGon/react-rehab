const starterCards = [
  { id: 1, title: "Write mission tests" },
  { id: 2, title: "Review behavior" }
];

export default function Exercise() {
  return (
    <section aria-labelledby="board-title">
      <h2 id="board-title">Practice Board</h2>

      <form>
        <label htmlFor="card-title">Card title</label>
        <input id="card-title" name="title" />
        <button type="button">Add card</button>
      </form>

      <ul aria-label="Board cards">
        {starterCards.map((card) => (
          <li key={card.id}>
            <button type="button">{card.title}</button>
          </li>
        ))}
      </ul>

      <section aria-labelledby="selected-card-title">
        <h3 id="selected-card-title">Selected card</h3>
        <p>No card selected.</p>
        <label htmlFor="selected-title">Selected card title</label>
        <input id="selected-title" name="selectedTitle" />
        <button type="button">Save changes</button>
        <button type="button">Delete selected</button>
        <button type="button">Clear selection</button>
      </section>
    </section>
  );
}
