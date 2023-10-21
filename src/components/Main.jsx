import React from 'react'
import Github from '../assets/github.png'
import Linkdeen from '../assets/linkdeen.png'
import Hero from '../assets/hero.png'

function Main() {
return (
    <main>
    <section className='w-full h-[120dvh] max-sm:h-[170dvh] sm:max-md:h-[176dvh] md:max-lg:h-[166dvh] bg-gradient-to-l from-amber-500 to-white'>
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
        <section className='w-full flex justify-center items-center bg-amber-500 section-desc'>
            <article className='hero-desc flex flex-col gap-5 max-sm:justify-center max-sm:gap-[2.5rem]'>
                <p className='text-justify max-sm:w-full sm:max-md:w-full w-[80%] text-white leading-[27px] font-enriquetabold para-desc'>Je suis Designer UI & UX située à Madagascar. Ceci est une visualisation de mes compétences en tant que designer et je suis contente de les partager avec vous.Ci-desous, vous découvrirez une collection diversifiée de mes projets qui illustrent mon approche créative.</p>
                <button className='bg-stone-800 w-fit bg-opacity-90 rounded-[20px] p-2.5 flex justify-center items-center text-white capitalize para-desc'>
                    télécharger mon cv
                </button>
            </article>
        </section>
    </section>
    </main>
    
)
}

export default Main
