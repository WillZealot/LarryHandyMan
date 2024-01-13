import React from 'react'
import homeImage from '../assets/img/homeImage.jpg'
const AboutPage = () => {
  return (
    <>
    <section className='w-2/5 mx-auto flex-col pt-10 pb-6'>
        <h2 className='flex justify-center text-5xl text-slate-700'>Discover Our Journey</h2>
        <p className='flex justify pt-6 pb-12 leading-relaxed'>Welcome to LGC – Your Trusted Partner in Home Solutions! I'm Larry, the face behind the tools. With a passion for craftsmanship and a commitment to excellence, LGC is here to transform your house into a home. With years of experience in fixing, building, and renovating, I take pride in delivering top-notch handyman services tailored to your needs. From small repairs to major renovations, trust LGC for quality workmanship and a friendly touch. Let's turn your vision into reality – where every nail, every paint stroke, and every detail speaks of care and dedication. Your satisfaction is our priority at LGC – Your Home, Our Craft.</p>
        <aside className='shadow-xl shadow-slate-400 rounded-lg'>
            <img src={homeImage} alt="Filler Photo." className='rounded-t-lg rounded-tr-lg'></img>
            <p className='pt-3 pb-3 text-center'>We are dedicated to finishing our projects promptly and with a high level of professionalism. Choosing LLG for your needs will be a decision you won't regret!</p>
        </aside>
    </section>
    </>
  )
}

export default AboutPage