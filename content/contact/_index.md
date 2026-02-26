+++
menus = 'main'
title = 'contact'
weight = -1
+++
<form class="contact-form" action="https://formspree.io/f/mqedneen" method="POST">
  <label>
    Your email
    <input type="email" name="email" required placeholder="you@example.com">
  </label>
  <label>
    Your message
    <textarea name="message" rows="5" required placeholder="What's on your mind?"></textarea>
  </label>
  <button type="submit">Send</button>
</form>

<style>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 500px;
  margin-bottom: 2rem;
}
.contact-form label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 500;
}
.contact-form input,
.contact-form textarea {
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid var(--border, #ddd);
  background: var(--entry, #f9f9f9);
  color: var(--primary, #222);
  font-family: inherit;
}
.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--primary, #222);
}
.contact-form textarea {
  resize: vertical;
  min-height: 120px;
}
.contact-form button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  background: var(--primary, #222);
  color: var(--theme, #fff);
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: opacity 0.2s;
}
.contact-form button:hover {
  opacity: 0.85;
}
</style>
<ul>
  <li>Email: <a href="mailto:djedir@gmail.com" target="_blank" rel="noopener noreferrer">djedir@gmail.com</a></li>
  <li>GitHub: <a href="https://github.com/ediardo" target="_blank" rel="noopener noreferrer">ediardo</a></li>
  <li>LinkedIn: <a href="https://www.linkedin.com/in/ediardo" target="_blank" rel="noopener noreferrer">ediardo</a></li>
</ul>
