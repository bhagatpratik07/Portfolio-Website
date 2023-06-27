import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p>contact@example.com</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>+1234567890</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p>123 Main Street, City, Country</p>
        </div>
      </div>
      <form className="contact-form">
        <h3>Send a Message</h3>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
