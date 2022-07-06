import Image from 'next/image'
import HeadMats from '../components/headMats'
import Header from '../components/header'
import Footer from '../components/footer'
export default function About() {
  return (
    <>
    <HeadMats img="/profile.svg" title="About Me"/>
    <Header/>
    <main className='px-28 pt-10 lg:px-14 sm:px-4 bg-slate-800'>
        <section className='text-white font-semibold rounded-xl bg-slate-700 flex flex-col justify-center items-center p-10'>
        <article>
            <h1 className='text-3xl sm:text-2xl xs:text-xl font-bold pb-5'>About Me</h1>
        </article>
        <div className='sm:w-1/2'>
            <Image className='rounded-full text' src="/Introducing.jpg" alt="profil" width={300} height={300}/>
        </div>
        <article>
            <p className='text-lg py-3 sm:text-base sm:text-justify sm:px-2 xs:text-sm'>Hello guys! I am Khairul Ihsannudin and now I am currently studying in UGM majoring Computer Science. Well, I have not learnt anything yet since I am new in this university. I am 17 years old and will be 18 this year. I live in Central Java and was born in Central Java too. Actually I wanna fill this using Lorem ipsum but I have more free time, lmao. For now I want to learn more about front-end things. Then, move to back-end and data science as I dunno about my passion. Just that. Probably I'll need more time than I think.</p>
        </article>
        </section>
    <Footer/>
    </main>
    </>
  )
}