import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_2m1xem2",     
        "template_x1wgv2t",    
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "TaZCoCUa-dXNd63ja"      
      )
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="contact-page fade-in">
      <h1>💬 Guild Contact</h1>
      <p className="contact-intro">
        Send a message to join Palak’s guild, request an alliance, or begin a
        new quest.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        
        <label className="contact-label">Your Name</label>
        <input
          type="text"
          name="name"
          className="contact-input"
          placeholder="Enter your name..."
          value={form.name}
          onChange={handleChange}
          required
        />

        <label className="contact-label">Email</label>
        <input
          type="email"
          name="email"
          className="contact-input"
          placeholder="Enter your email..."
          value={form.email}
          onChange={handleChange}
          required
        />

        <label className="contact-label">Message</label>
        <textarea
          name="message"
          className="contact-input contact-textarea"
          placeholder="State your quest or message..."
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button className="contact-btn" type="submit">
          📨 Send Message
        </button>

        {/* Status messages */}
        {status === "sending" && <p>⚙️ Sending message...</p>}
        {status === "sent" && <p>Message delivered to the Guild!</p>}
        {status === "error" && <p>There was an error sending your message.</p>}
      </form>

      {/* Social Links */}
      <div className="contact-social">
        <h3>Other Ways to Connect</h3>

        <div className="social-links">
          <a href="mailto:palak3438@gmail.com" className="social-link">
            ✉️ Email
          </a>
          <a href="https://github.com/psasaslsask" target="_blank" className="social-link">
            🧪 GitHub
          </a>
          <a href="https://www.linkedin.com/in/psharma-itis/" target="_blank" className="social-link">
            💼 LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
