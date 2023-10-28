import React from 'react'
import { FaX } from 'react-icons/fa6';

function Modal({isOpen, isClose, image, alt, title, para}) {
    if (!isOpen) return null;
return (
    <div className='fixed top-0 left-0 w-full h-[100dvh] bg-black z-[1] flex items-center justify-center' onClick={isClose}>
        <div className='bg-white p-[20px] rounded-[5px] max-sm:h-[90dvh] sm:max-md:h-[80dvh] md:max-lg:h-[90dvh] md:max-lg:flex-col max-sm:flex-col sm:max-md:flex-col relative z-[2] w-[80%] flex gap-6' onClick={(event) => event.stopPropagation()}>
            <section>
                <img src={image} alt={alt} className='sm:max-md:w-full md:max-lg:w-full md:max-lg:h-[40dvh] md:max-lg:object-cover sm:max-md:h-[40dvh] sm:max-md:object-cover rounded-md' />
            </section>
            <span className='absolute top-0 right-0 p-[10px] cursor-pointer' onClick={isClose}>
                <FaX/>
            </span>
            <div>
                <h2 className='font-epilogue card-heading'>{title}</h2>
                <p className='font-epilogue card-para'>{para}</p>
            </div>
        </div>
    </div>
)
}

export default Modal
