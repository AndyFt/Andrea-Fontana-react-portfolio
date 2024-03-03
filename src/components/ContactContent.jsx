import React from "react";
import "./ContactContentStyles.css";
import { Link } from "react-router-dom";

const ContactContent = () => {
  return (
    <div className="form">
      <form>
        <label>Your name </label>
        <input type="text"></input>
        <label>Email </label>
        <input type="email"></input>
        <label>Subject </label>
        <input type="text"></input>
        <label>Message </label>
        <textarea rows="6" placeholder="Type your message here" />
        <Link className="submit-button" to='javascript:void(0)' onClick={() => window.location = 'mailto:andyfontana.dev@gmail.com'}>Submit</Link>
      </form>
    </div>
  )
}

export default ContactContent;