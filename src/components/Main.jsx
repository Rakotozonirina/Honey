import React from 'react'
import Github from '../assets/github.png'
import Linkdeen from '../assets/linkdeen.png'
import Hero from '../assets/hero.png'
import CircleOne from '../assets/circleOne.svg'
import CircleTwo from '../assets/circleTwo.svg'
import CircleThree from '../assets/circleThree.svg'
import SeparatorBlack from '../assets/separatorBlack.png'
import Figma from '../assets/figma.svg'
import Xd from '../assets/xd.png'
import Html from '../assets/html.svg'
import Css from '../assets/css.svg'
import Card from './Card'
import { Contact } from './Contact'
import { motion } from 'framer-motion'

function Main() {
return (
    <main>
    <section className='w-full h-[auto] max-sm:h-[auto] sm:max-md:h-[auto] md:max-lg:h-[auto] bg-gradient-to-l from-amber-500 to-white'>
        <section className='hero h-[84dvh] max-sm:flex-col max-sm:h-[120dvh] sm:max-md:h-[130dvh] md:max-lg:h-[120dvh] sm:max-md:flex-col md:max-lg:flex-col flex justify-around items-center'>
            <article>
                <h1 className='heading-hero drop-shadow-lg font-inikabold headingOne'>RAHAJANIRINA <br /> Nomenjanahary Tantely</h1>
                <p className='font-inikaregular para-hero drop-shadow-lg headingOne'>UI & UX Designer</p>
                <div className='w-full flex justify-around items-center h-[16dvh] headingOne'>
                    <div className='span-hero w-fit bg-zinc-300 cursor-pointer hover:bg-zinc-400 hover:rounded-xl duration-75'>
                        <a href="https://github.com/NOMENJANAHARYTantely">
                            <img src={Github} alt="github" />
                        </a>
                    </div>
                    <div className='span-hero w-fit bg-zinc-300 cursor-pointer hover:bg-zinc-400 hover:rounded-xl duration-75'>
                        <a href="https://www.linkedin.com/in/mamy-nomenjanahary-057585255/">
                            <img src={Linkdeen} alt="linkdeen" />
                        </a>
                    </div>
                </div>
            </article>
            <div>
                <img src={Hero} alt="hero" className='animationHero' />
            </div>
        </section>
        <section className='w-full flex justify-center items-center bg-amber-500 section-desc'>
            <motion.article initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='hero-desc flex flex-col gap-5 max-sm:justify-center max-sm:gap-[2.5rem]'>
                <p className='text-justify max-sm:w-full sm:max-md:w-full w-[80%] text-white leading-[27px] font-enriquetabold para-desc'>Je suis Designer UI & UX située à Madagascar. Ceci est une visualisation de mes compétences en tant que designer et je suis contente de les partager avec vous.Ci-desous, vous découvrirez une collection diversifiée de mes projets qui illustrent mon approche créative.</p>
                <button className='bg-stone-800 hover:bg-stone-700 duration-75 hover:shadow-xl w-fit bg-opacity-90 rounded-[20px] p-2.5 flex justify-center items-center text-white capitalize para-desc'>
                    télécharger mon cv
                </button>
            </motion.article>
        </section>
    </section>
    <section className='w-full h-[100dvh] relative' id="about">
        <section className='education h-[100dvh]'>
            <article className='relative flex items-center justify-center w-full h-[25dvh]'>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='max-sm:scale-[0.8] max-sm:left-[-10%] sm:max-md:scale-[0.7] absolute md:max-lg:scale-[0.8] lg:max-xl:scale-[0.9] top-[4%] left-0'>
                    <img src={CircleOne} alt=" circle one" />
                </motion.div>
                <motion.h1 initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='font-epilogue drop-shadow-lg heading-educ'>Educations</motion.h1>
            </article>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='max-sm:scale-[0.8] max-sm:left-[-22%] max-sm:z-[-10] sm:max-md:left-[-18%] sm:max-md:z-[-10] sm:max-md:scale-[0.6] md:max-lg:scale-[0.7] md:max-lg:left-[-18%] lg:max-xl:scale-[0.8] lg:max-xl:left-[-14%] absolute left-[-6%] top-[14%]'>
                <img src={CircleTwo} alt="circle two"/>
            </motion.div>
            <article className='grid nice w-full h-[60dvh]'>
                    <div className='flex max-sm:flex-col max-sm:justify-around sm:max-md:justify-around sm:max-md:flex-col'>
                    <article className='md:max-lg:w-[80%] lg:max-xl:w-[80%] xl:w-[80%] xl:flex xl:items-center lg:max-xl:flex lg:max-xl:items-center md:max-lg:flex md:max-lg:items-center'>
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='child-article'>
                            <h2 className='font-epilogue text-yellow-600 text-justify heading-two-education drop-shadow-lg'>ESSGAM - Ecole Saint Gabriel Mahajanga</h2>
                            <p className='font-epilogue text-justify para-one-education'>Diplôme de licence. Licence en Finance comptabilité</p>
                        </motion.div>
                    </article>
                    <div className='max-sm:flex max-sm:justify-center max-sm:items-center sm:max-md:flex sm:max-md:justify-center sm:max-md:items-center md:max-lg:w-[20%] xl:w-[20%] xl:flex xl:items-center lg:max-xl:w-[20%] lg:max-xl:flex lg:max-xl:items-center md:max-lg:flex md:max-lg:items-center'>
                        <div className='btn-article xl:flex xl:justify-center lg:max-xl:flex lg:max-xl:justify-center md:max-lg:flex md:max-lg:justify-center'>
                            <motion.button initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='p-2.5 w-fit rounded-[20px] bg-amber-500 cursor-auto hover:bg-amber-400 duration-75 hover:shadow-xl font-esteban text-white'>
                                2021 - 2023
                            </motion.button>
                        </div>
                    </div>
                    </div>
                    <div className='flex max-sm:flex-col max-sm:justify-around sm:max-md:justify-around sm:max-md:flex-col'>
                    <article className='md:max-lg:w-[80%] lg:max-xl:w-[80%] xl:w-[80%] xl:flex xl:items-center lg:max-xl:flex lg:max-xl:items-center md:max-lg:flex md:max-lg:items-center'>
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='child-article'>
                            <h2 className='font-epilogue text-yellow-600 text-justify heading-two-education drop-shadow-lg'>SAYNA</h2>
                            <p className='font-epilogue text-justify para-one-education'>Spécialisation en Design UI/UX</p>
                        </motion.div>
                    </article>
                    <div className='max-sm:flex max-sm:justify-center md:max-lg:w-[20%] lg:max-xl:w-[20%] xl:w-[20%] xl:flex xl:items-center md:max-lg:flex md:max-lg:items-center lg:max-xl:flex lg:max-xl:items-center max-sm:items-center sm:max-md:flex sm:max-md:justify-center sm:max-md:items-center'>
                        <div className='btn-article xl:flex xl:justify-center lg:max-xl:flex lg:max-xl:justify-center md:max-lg:flex md:max-lg:justify-center'>
                            <motion.button initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='p-2.5 w-fit rounded-[20px] bg-amber-500 font-esteban cursor-auto hover:bg-amber-400 duration-75 hover:shadow-xl text-white'>
                                Mars 2023
                            </motion.button>
                        </div>
                    </div>
                    </div>
            </article>
            <div className='flex justify-center items-center h-[15dvh]'>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='w-fit'>
                    <img src={SeparatorBlack} alt="Separator Black" />
                </motion.div>
            </div>
        </section>
    </section>
    <section className='w-full h-[80dvh] relative max-sm:h-[130dvh]'>
        <article className='skill-article h-[20dvh] flex justify-center items-center'>
            <motion.h2 initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='font-epilogue drop-shadow-lg heading-educ'>Mes compétences</motion.h2>
        </article>
        <section className='skill-section grid grid-cols-4 h-[60dvh] max-sm:h-[110dvh] gap-4 max-sm:gap-4'>
            <div>
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 1 }} className='skill'>
                    <div>
                        <img src={Figma} alt="figma" />
                    </div>
                    <article>
                        <h2 className='text-[1.5rem] font-epilogue'>Figma</h2>
                    </article>
                </motion.section>
            </div>
            <div>
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 1 }} className='skill'>
                    <div>
                        <img src={Xd} alt="xd" />
                    </div>
                    <article>
                        <h2 className='text-[1.5rem] font-epilogue'>Adobe XD</h2>
                    </article>
                </motion.section>
            </div>
            <div>
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 1 }} className='skill'>
                    <div>
                        <img src={Html} alt="html" />
                    </div>
                    <article>
                        <h2 className='text-[1.5rem] font-epilogue'>HTML</h2>
                    </article>
                </motion.section>
            </div>
            <div>
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 1 }} className='skill'>
                    <div>
                        <img src={Css} alt="css" />
                    </div>
                    <article>
                        <h2 className='text-[1.5rem] font-epilogue'>CSS</h2>
                    </article>
                </motion.section>
            </div>
        </section>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='absolute bottom-[10%] right-0'>
            <img src={CircleThree} alt="circle three" />
        </motion.div>
    </section>
    <section className='w-full h-[150dvh] lg:max-xl:h-[200dvh] md:max-lg:h-[200dvh] sm:max-md:h-[400dvh] max-sm:h-[400dvh] bg-stone-200 bg-opacity-80' id='project'>
        <article className='competence-article flex justify-center items-center h-[20dvh]'>
            <motion.h2 initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='competence-heading drop-shadow-lg font-epilogue'>Mes projets</motion.h2>
        </article>
        <section className='h-[130dvh] lg:max-xl:h-[180dvh] md:max-lg:h-[180dvh] sm:max-md:h-[380dvh] max-sm:h-[380dvh] grid competence-section'>
            <Card/>
        </section>
    </section>
    <section className="w-full h-[70dvh] max-sm:border max-sm:h-[100dvh] sm:max-md:h-[80dvh] flex justify-center items-center" id='contact'>
        <section className='nice-contact grid max-sm:gap-4 sm:max-md:gap-5 md:max-lg:gap-4'>
            <motion.article initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                <h2 className='font-semibold font-epilogue text-[1.5rem] drop-shadow-lg'>Travaillons ensemble</h2>
                <p className='font-epilogue text-[17px]'>Si vous souhaitez collaborer avec Moi, n'hésitez pas à me contacter à toute date et heure qui vous conviennent le mieux</p>
            </motion.article>
            <Contact/>
        </section>
    </section>
    </main>
    
)
}

export default Main
