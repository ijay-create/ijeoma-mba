import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaBehance } from "react-icons/fa";
import toast from "react-hot-toast";

import "../styles/contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const loadingToast = toast.loading("Sending message...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          id: loadingToast,
        });

        setLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);

        toast.error("Failed to send message. Try again.", {
          id: loadingToast,
        });

        setLoading(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">

        {/* TITLE */}
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Contact <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="contact-container">

          {/* FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form glass"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          {/* INFO */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-card glass">
              <h3>Email</h3>
              <p>ijeomamba640@gmail.com</p>
            </div>

            <div className="social-links">

              <a
                href="https://github.com/ijay-create"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mba-ijeoma-74ab83385"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>

              <a
                href="https://www.behance.net/ijeoma-mba"
                target="_blank"
                rel="noreferrer"
              >
                <FaBehance />
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;