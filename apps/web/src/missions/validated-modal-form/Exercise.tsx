import { useState } from "react";

export default function Exercise() {
  const [open, setOpen] = useState(false);

  return (
    <section aria-labelledby="contacts-title">
      <h2 id="contacts-title">Team Contacts</h2>
      <button onClick={() => setOpen(true)} type="button">
        Add contact
      </button>

      <ul aria-label="Saved contacts">
        <li>No contacts yet.</li>
      </ul>

      {open ? (
        <div aria-labelledby="new-contact-title" role="dialog">
          <h3 id="new-contact-title">New contact</h3>
          <form>
            <div>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" />
            </div>
            <div>
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" />
            </div>
            <button type="button">Save contact</button>
            <button onClick={() => setOpen(false)} type="button">
              Cancel
            </button>
          </form>
        </div>
      ) : null}
    </section>
  );
}
