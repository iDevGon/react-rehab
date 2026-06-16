const cartItems = [
  { id: 1, name: "Coffee Beans", price: 18.5, quantity: 1 },
  { id: 2, name: "Pour-over Kettle", price: 24, quantity: 2 },
  { id: 3, name: "Paper Filters", price: 2.5, quantity: 3 }
];

export default function Exercise() {
  return (
    <section aria-labelledby="cart-title">
      <h2 id="cart-title">Cafe Cart</h2>

      <ul aria-label="Cart items">
        {cartItems.map((item) => (
          <li key={item.id}>
            <label>
              <input type="checkbox" />
              {item.name}
            </label>
            <span>Quantity: {item.quantity}</span>
            <span> Price: ${item.price.toFixed(2)}</span>
            <button type="button" aria-label={`Decrease ${item.name}`}>
              -
            </button>
            <button type="button" aria-label={`Increase ${item.name}`}>
              +
            </button>
          </li>
        ))}
      </ul>

      <p>Total quantity: 0</p>
      <p>Total price: $0.00</p>
      <p>Selected items: 0</p>
    </section>
  );
}
