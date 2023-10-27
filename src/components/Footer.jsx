import React from 'react'
import Facebook from '../assets/facebook.svg'
import Linkdeen from '../assets/linkdeensvg.svg'
import Email from '../assets/email.svg' 
import { motion } from 'framer-motion'

function Footer() {
return (
    <footer className='w-full flex justify-center items-center h-[40dvh] bg-stone-200'>
        <div className='footer-div h-[30dvh]'>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='flex h-[10dvh] justify-center items-center gap-6'>
                <div>
                    <img src={Facebook} alt="facebook" />
                </div>
                <div>
                    <img src={Linkdeen} alt="linkdeen" />
                </div>
                <div>
                    <img src={Email} alt="email" />
                </div>
            </motion.div>
            <article className='h-[20dvh] flex justify-center'>
                <motion.p initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="font-nunito footer-para"> <strong>@2023 Nomena Tantely</strong> All Rights Reserved.</motion.p>
            </article>
        </div>
    </footer>
)
}

export default Footer
