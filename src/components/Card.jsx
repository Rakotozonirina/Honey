import React from 'react'
import ProjetOne from '../assets/projet_one.png'
import ProjetTwo from '../assets/projet_two.png'
import ProjetThree from '../assets/projet_three.png'
import ProjetFour from '../assets/projet_four.png'
import ProjetFive from '../assets/projet_five.png'
import ProjetSix from '../assets/projet_six.png' 

const Datas = [
    {
        id: 1,
        image: ProjetOne,
        alt: "projet one",
        title: "Batman",
        para: "HTML & CSS",
    },
    {
        id: 2,
        image: ProjetTwo,
        alt: "projet two",
        title: "Black Panther",
        para: "HTML & CSS",
    },
    {
        id: 3,
        image: ProjetThree,
        alt: "projet three",
        title: "Space travel",
        para: "wordpress",
    },
    {
        id: 4,
        image: ProjetFour,
        alt: "projet four",
        title: "Eduland",
        para: "Design UI/UX sur Figma",
    },
    {
        id: 5,
        image: ProjetFive,
        alt: "projet five",
        title: "Kal’fÿ",
        para: "Adobe XD - Conception graphique",
    },
    {
        id: 6,
        image: ProjetSix,
        alt: "projet six",
        title: "M'laiky",
        para: "Design UI/UX sur Figma",
    },
];

function Card() {
return (
    <>
        {Datas.map((Data) => (
            <div className='competence-div h-[60dvh]' key={Data.id}>
            <div className='nice-card'>
                <div className='w-full'>
                    <img src={Data.image} alt={Data.alt} className='h-[40dvh] sm:max-md:w-[100dvw] max-sm:w-[100dvw] w-[100dvw] object-cover' />
                </div>
                <article className='h-[20dvh] py-[3em]'>
                    <h2 className='font-epilogue card-heading'>{Data.title}</h2>
                    <p className='font-epilogue card-para'>{Data.para}</p>
                </article>
            </div>
        </div>
        ))}
    </>
)
}

export default Card
