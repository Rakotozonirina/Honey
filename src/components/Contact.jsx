import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID , import.meta.env.VITE_YOUR_TEMPLATE_ID , form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
};

return (
    <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
    </form>
  );
};
