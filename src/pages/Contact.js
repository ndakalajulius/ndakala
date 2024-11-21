import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="4" required></textarea>

        <button type="submit" className="button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
