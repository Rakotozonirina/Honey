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
    <div className='contact-div max-sm:w-full md:max-lg:w-[90%] lg:max-xl:w-[80%] w-[65%]'>
        <form ref={form} onSubmit={sendEmail} className="gap-4 grid">
            <input type="text" name="user_name" placeholder='Name' className="bg-zinc-300 outline-none p-2.5" />
            <input type="email" name="user_email" placeholder='Email' className='bg-zinc-300 outline-none p-2.5' />
            <textarea name="message" placeholder='Message' className='bg-zinc-300 outline-none textarea-contact p-3' />
            <div className='w-full h-[10dvh] '>
                <input type="submit" value="Submit" className='text-white bg-black font-epilogue cursor-pointer py-2.5 px-4' />
            </div>
        </form>
    </div>
);
};
