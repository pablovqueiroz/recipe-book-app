import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ name, email, message });

    setStatus("sent");
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <span>Contact Us</span>
      <div className="contactInnerForm">
        <label>
          Full Name
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <label>
          Message
          <textarea
            placeholder="Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </label>
      </div>
      <div className="send-msg-btn">
        <button type="submit">Send</button>

        {status === "sent" && <p>Message sent successfully!</p>}
      </div>
    </form>
  );
}
