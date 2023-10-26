import React from 'react'
import '../style/Loading.css'

function Loading() {
return (
    <div className=' w-full h-[100dvh] fixed flex justify-center items-center bg-stone-200'>
        <div className="spinner">
            <div></div>   
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
        </div>
    </div>
    
)
}

export default Loading
