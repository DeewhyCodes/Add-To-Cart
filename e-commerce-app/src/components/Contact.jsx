import React from "react";
import "./Contact.css";

const Contact = () => {
  const whatsappNumber = "+2349030461076";
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or inquiries, feel free to get in touch with
        us.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <br />
      <h3>OR</h3>
      <br />
      <h3>
        <a
          href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Say hello
          <i className="bi bi-whatsapp"></i>
        </a>
      </h3>
    </div>
  );
};

export default Contact;
