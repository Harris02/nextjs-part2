//Saya buat ini dengan bolak-balik baca refrensi. Jadi hanya Tuhan dan saya yang tahu.
//Jika Anda membaca ini, itu artinya sekarang hanya Tuhan yang tahu. Jadi jangan tanya saya. Saya sendiri bakalan lupa soalnya. Tehe...
import Image from 'next/image'
import HeadMats from '../components/headMats'
import Header from '../components/header'
import Link from 'next/link'
import Container from '../components/container'
import Footer from '../components/footer'
export default function Home() {
  return (
    <>
    <HeadMats img="/home.svg" title="Home Page"/>
    <Header/>
    <main className='px-28 lg:px-14 sm:px-4 bg-slate-800'>
    <section className='text-white font-semibold flex flex-row lg:items-center lg:flex-col-reverse py-10 lg:bg-slate-700 lg:rounded-2xl lg:mb-7'>
      <div className='justify-center lg:text-center flex flex-col lg:w-1/2 sm:w-full sm:px-2'>
        <h1 className='text-4xl font-bold  lg:text-xl'>Hi Guys! <br/> I am Khairul Ihsannudin</h1>
        <h2 className='w-1/2 lg:w-full text-xl font-medium lg:text-lg'>Cheers! I am new in this programming world but I am developing myself into a better one. Hope it goes well.</h2>
        <h2 className='py-3' >Contact Me</h2>
      </div>
      <div className='md:w-1/2'>
        <Image className='rounded-full' src="/Introducing.jpg" alt="profil" width={400} height={400}/>
      </div>
    </section>

    <section className=' text-white bg-slate-700 pb-10 rounded-2xl'>
      <h1 className='text-center text-2xl font-bold p-16'>
        What I have Learnt
      </h1>
      <article className='px-10'>
        <h1 className='text-xl'>Language</h1>
        <main className='flex flex-row flex-wrap gap-10 lg:justify-center'>
        <Container asal="/js.svg" bahasa="JavaScript"/>
        <Container asal="/python.svg" bahasa="Python"/>           
        </main>  
      </article>

      <article className='px-10 mt-10'>
        <h1 className='text-xl'>Frontend</h1>
        <main className='flex flex-wrap gap-10 flex-row lg:justify-center'>
        <Container asal="/html.svg" bahasa="HTML"/>
        <Container asal="/css.png" bahasa="CSS"/>
        <Container asal="/tail.svg" bahasa="Tailwind"/>
        <Container asal="/js.svg" bahasa="JavaScript"/>       
        </main>  
      </article>
    </section>
    <section className=' text-white bg-slate-700 pb-10 rounded-2xl my-10'>
        <h1 className='text-center text-2xl font-bold pt-16'>
          Want to Learn More About
        </h1>
    <article className='p-10'>
        <main className='flex flex-row flex-wrap gap-10 lg:justify-center'>
        <Container asal="/react.png" bahasa="React"/>
        <Container asal="/golang.svg" bahasa="Golang"/>
        <Container asal="/php.svg" bahasa="PHP"/>
        <Container asal="/html.svg" bahasa="HTML"/>
        <Container asal="/css.png" bahasa="CSS"/>
        <Container asal="/tail.svg" bahasa="Tailwind"/>
        <Container asal="/js.svg" bahasa="JavaScript"/>
        <Container asal="/python.svg" bahasa="Python"/> 
        </main>
      </article>
    </section>
    <Footer/>
    </main>
    </>
  )
}