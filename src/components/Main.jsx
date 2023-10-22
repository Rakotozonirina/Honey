import React from 'react'
import Github from '../assets/github.png'
import Linkdeen from '../assets/linkdeen.png'
import Hero from '../assets/hero.png'

function Main() {
return (
    <main>
    <section className='w-full h-[auto] max-sm:h-[auto] sm:max-md:h-[auto] md:max-lg:h-[auto] bg-gradient-to-l from-amber-500 to-white'>
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
    <section className='w-full h-[100dvh] relative border border-red-400'>
        <section className='education border border-green-400 h-[100dvh]'>
            <article className='border border-violet-400 flex items-center justify-center w-full h-[25dvh]'>
                <h1 className='font-epilogue heading-educ'>Educations</h1>
            </article>
            <article className='border border-yellow-400 grid nice w-full h-[60dvh]'>
                    <div className='flex max-sm:flex-col max-sm:justify-around sm:max-md:justify-around sm:max-md:flex-col'>
                    <article className='md:max-lg:w-[80%] lg:max-xl:w-[80%] xl:w-[80%] xl:flex xl:items-center lg:max-xl:flex lg:max-xl:items-center md:max-lg:flex md:max-lg:items-center'>
                        <div className='child-article'>
                            <h2 className='font-epilogue text-yellow-600 text-justify heading-two-education'>ESSGAM - Ecole Saint Gabriel Mahajanga</h2>
                            <p className='font-epilogue text-justify para-one-education'>Diplôme de licence. Licence en Finance comptabilité</p>
                        </div>
                    </article>
                    <div className='max-sm:flex max-sm:justify-center max-sm:items-center sm:max-md:flex sm:max-md:justify-center sm:max-md:items-center md:max-lg:w-[20%] xl:w-[20%] xl:flex xl:items-center lg:max-xl:w-[20%] lg:max-xl:flex lg:max-xl:items-center md:max-lg:flex md:max-lg:items-center'>
                        <div className='btn-article xl:flex xl:justify-center lg:max-xl:flex lg:max-xl:justify-center md:max-lg:flex md:max-lg:justify-center'>
                            <button className='p-2.5 w-fit rounded-[20px] bg-amber-500 font-esteban text-white'>
                                2021 - 2023
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className='flex max-sm:flex-col max-sm:justify-around sm:max-md:justify-around sm:max-md:flex-col'>
                    <article className='md:max-lg:w-[80%] lg:max-xl:w-[80%] xl:w-[80%] xl:flex xl:items-center lg:max-xl:flex lg:max-xl:items-center md:max-lg:flex md:max-lg:items-center'>
                        <div className='child-article'>
                            <h2 className='font-epilogue text-yellow-600 text-justify heading-two-education'>SAYNA</h2>
                            <p className='font-epilogue text-justify para-one-education'>Spécialisation en Design UI/UX</p>
                        </div>
                    </article>
                    <div className='max-sm:flex max-sm:justify-center md:max-lg:w-[20%] lg:max-xl:w-[20%] xl:w-[20%] xl:flex xl:items-center md:max-lg:flex md:max-lg:items-center lg:max-xl:flex lg:max-xl:items-center max-sm:items-center sm:max-md:flex sm:max-md:justify-center sm:max-md:items-center'>
                        <div className='btn-article xl:flex xl:justify-center lg:max-xl:flex lg:max-xl:justify-center md:max-lg:flex md:max-lg:justify-center'>
                            <button className='p-2.5 w-fit rounded-[20px] bg-amber-500 font-esteban text-white'>
                                Mars 2023
                            </button>
                        </div>
                    </div>
                    </div>
            </article>
            <div className='border border-amber-400 h-[15dvh]'>

            </div>
        </section>
    </section>
    </main>
    
)
}

export default Main
