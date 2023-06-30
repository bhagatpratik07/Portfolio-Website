import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("xdorndyw");
  if (state.succeeded) {
    return (
      <p className="success-message">
        Thank you for sending a message! I will get back to you soon :)
      </p>
    );
  }
  return (
    <div className="contact-section" id="contact">
      <h1 className="contact-heading">Send me a Message!</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <ValidationError
          prefix={<span className="error-prefix">Email</span>}
          field="email"
          errors={state.errors}
        />
        <textarea
          className="input-field"
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <ValidationError
          prefix={<span className="error-prefix">Message</span>}
          field="message"
          errors={state.errors}
        />
        <button
          className="submit-button"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
