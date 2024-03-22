import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact">
        <h1>Contact Me</h1>
        <div className="contact-container">
          <div className="contact-options">
            <article className="sochial-contact">
              <AiOutlineMail className="icons"/>
              <h4>Email</h4>
              <h5>bendarya58@gmail.com</h5>
              <a href="mailto:bendarya58@gmail.com" target="-blank">Send Message</a>
            </article>
      
            <article className="sochial-contact">
              <BsMessenger className="icons"/>
              <h4>Messengar</h4>
              <h5>Ahmed Bendary</h5>
              <a href="https://m.me/bendary32" target="-blank">Send Message</a>
            </article>
      
            <article className="sochial-contact">
              <AiOutlineWhatsApp className="icons"/>
              <h4>WhatsApp</h4>
              <h5>+01060394855</h5>
              <a href="https://api.whatsapp.com/send?phone=01060394855" target="-blank">Send Message</a>
            </article>
          </div>
          <form action="">
            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="message" rows="10" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
    </div>
  );
};

export default Contact;
