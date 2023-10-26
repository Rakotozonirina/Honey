import React from 'react'
import Facebook from '../assets/facebook.svg'
import Linkdeen from '../assets/linkdeensvg.svg'
import Email from '../assets/email.svg' 

function Footer() {
return (
    <footer className='w-full flex justify-center items-center h-[40dvh] bg-stone-200'>
        <div className='footer-div h-[30dvh]'>
            <div className='flex h-[10dvh] justify-center items-center gap-6'>
                <div>
                    <img src={Facebook} alt="facebook" />
                </div>
                <div>
                    <img src={Linkdeen} alt="linkdeen" />
                </div>
                <div>
                    <img src={Email} alt="email" />
                </div>
            </div>
            <article className='h-[20dvh] flex justify-center'>
                <p className="font-nunito footer-para"> <strong>@2023 Nomena Tantely</strong> All Rights Reserved.</p>
            </article>
        </div>
    </footer>
)
}

export default Footer
