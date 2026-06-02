import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "../styles/contactpage.css";

const ContactPage = () => {

  return (
    <div className="contact-page">

      <Navbar />
      <Contact />
      <Footer />

    </div>
  );
};

export default ContactPage;