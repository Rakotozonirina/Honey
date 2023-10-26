import React, { useState } from 'react'
import Logo from '../assets/logohoney.png'
import { FaBarsStaggered, FaX } from 'react-icons/fa6'

function Navbar() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if(element){
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
return (
    <header className='w-full h-[16dvh] relative flex justify-center items-center bg-gradient-to-l from-amber-500 to-amber-400'>
        <nav className='h-[10dvh] flex items-center justify-between navbar'>
            <div>
                <img src={Logo} alt="logo" className='h-[10dvh] logo' />
            </div>
            <div>
                <ul className={`flex items-center ${show ? 'max-sm:text-center max-sm:flex max-sm:flex-col max-sm:fixed max-sm:p-[5rem] max-sm:z-[10] max-sm:top-0 max-sm:bottom-0 max-sm:right-0 max-sm:bg-amber-400' : 'max-sm:hidden'} gap-2 p-1.5 uppercase font-inikaregular nav-ul`}>
                    <li className='cursor-pointer' onClick={() => scrollToElement('about')}>à propos de moi</li>
                    <li className='cursor-pointer' onClick={() => scrollToElement('project')}>mes projets</li>
                    <li className='cursor-pointer' onClick={() => scrollToElement('contact')}>contacts</li>
                    <li className='absolute top-[2%] left-[6%]'>
                        <div className='cursor-pointer sm:hidden' onClick={() => handleShow(false)}>
                            <FaX/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='sm:hidden cursor-pointer p-2' onClick={handleShow}>
                <FaBarsStaggered className='w-[1.5em] h-[1.5em]'/>
            </div>
        </nav> 
    </header>
)
}

export default Navbar
