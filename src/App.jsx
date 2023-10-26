import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Loading from './components/Loading'
import './App.css'


function App() {
    const [scrollTop, setScrollTop] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.pageYOffset > 340){
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    const bottomToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    };

    return (
        <>
            {loading ? (<Loading/>):( <>
            <Navbar/>
            <Main/>
            <Footer/>
            </> )}
            
            { scrollTop && (
                    <button onClick={bottomToTop} className='p-2.5 rounded-full text-white bg-amber-400 fixed bottom-[25px] right-[25px]'>
                        &#8593;
                    </button>
            ) }
        </>
    )
}

export default App
