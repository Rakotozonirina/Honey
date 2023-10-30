import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { message } from 'antd'
import { motion } from 'framer-motion';

export const Contact = () => {
    const form = useRef();
    const [messageApi, contextHolder] = message.useMessage();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID , import.meta.env.VITE_YOUR_TEMPLATE_ID , form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY )
    .then((result) => {
        messageApi.success('Message sent successfully!');
        console.log(result.text);
    }, (error) => {
        messageApi.error('An error occurred while sending the message!');
        console.log(error.text);
    });
};

return (
    <>
        {contextHolder}
        <div className='contact-div max-sm:w-full md:max-lg:w-[90%] lg:max-xl:w-[80%] w-[65%]'>
            <motion.form initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} ref={form} onSubmit={sendEmail} className="gap-4 grid">
                <input type="text" name="user_name" placeholder='Name' className="bg-zinc-300 outline-none p-2.5" required />
                <input type="email" name="user_email" placeholder='Email' className='bg-zinc-300 outline-none p-2.5' required />
                <textarea name="message" placeholder='Message' className='bg-zinc-300 outline-none textarea-contact p-3' required />
                <div className='w-full h-[10dvh] '>
                    <input type="submit" value="Submit" className='text-white bg-black duration-75 hover:rounded-xl hover:shadow-xl font-epilogue cursor-pointer py-2.5 px-4' />
                </div>
            </motion.form>
        </div>
    </>
);
};
