import React from 'react'
import Github from '../assets/github.png'
import Linkdeen from '../assets/linkdeen.png'
import Hero from '../assets/hero.png'

function Main() {
return (
    <main className='w-full h-[100dvh] max-sm:h-[120dvh] sm:max-md:h-[130dvh] md:max-lg:h-[120dvh] bg-gradient-to-l from-amber-500 to-white'>
        <section className='hero h-[84dvh] max-sm:flex-col max-sm:h-[120dvh] sm:max-md:h-[130dvh] md:max-lg:h-[120dvh] sm:max-md:flex-col md:max-lg:flex-col flex justify-around items-center'>
            <article>
                <h1 className='heading-hero font-inikabold'>RAHAJANIRINA <br /> Nomenjanahary Tantely</h1>
                <p className='font-inikaregular para-hero'>UI & UX Designer</p>
                <div className='w-full flex justify-around items-center h-[16dvh]'>
                    <div className='span-hero w-fit bg-zinc-300'>
                        <img src={Github} alt="github" />
                    </div>
                    <div className='span-hero w-fit bg-zinc-300'>
                        <img src={Linkdeen} alt="linkdeen" />
                    </div>
                </div>
            </article>
            <div>
                <img src={Hero} alt="hero" />
            </div>
        </section>
    </main>
)
}

export default Main
