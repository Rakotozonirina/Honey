import React from 'react'
import { FaX } from 'react-icons/fa6';

function Modal({isOpen, isClose, image, alt, title, para}) {
    if (!isOpen) return null;
return (
    <div className='fixed top-0 left-0 w-full h-[100dvh] bg-black z-[1] flex items-center justify-center'>
        <div className='bg-white p-[20px] rounded-[5px] relative z-[2] w-[80%] flex gap-6'>
            <section>
                <img src={image} alt={alt} />
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
