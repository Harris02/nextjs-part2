import Image from 'next/image'
import HeadMats from '../components/headMats'
import Header from '../components/header'
import Link from 'next/link'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
    <HeadMats img="/home.svg" title="Home Page"/>
    <Header/>
    <div className='box-border text-center mt-32'>    
    <h1 className=' p-10 text-3xl overflow-ellipsis'>Hello! I'm <span className='font-bold'>Ihsan</span>.<br/> I learn anything attracted me but never finish what I've learnt LOL.</h1>
    <h2>Click the button below to know more <Link href="/about"><a className='text-blue-600'>About Me</a></Link></h2>
    <button type='button' className='m-3 p-8 border-black border-4 rounded-full'><Link href="about"><a>ABOUT ME</a></Link></button>
    </div>

    <div className='flex flex-row items-center justify-center gap-36 mt-40'>
      <Image src="/kotak.jpeg" width={500} height={500}/>
      <div className='mx-4'>
      <h1 className='font-bold text-3xl overflow-ellipsis'>My Best Friends in <br/>Junior High-School</h1>
      <button className='border-2 bg-black text-white p-3 mt-2' type='button'>Read My Journey</button>
      </div>
    </div>

    <div className='flex flex-row items-center justify-center gap-36  my-32'>
    <div className='mx-4'>
      <h1 className='font-bold text-3xl overflow-ellipsis'>My Activities<br/> during<br/> This Holiday</h1>
      <button className='border-2 bg-black text-white p-3 mt-2' type='button'>My Activities</button>
    </div>
    <Image src="/kotak2.jpeg" width={500} height={500}/>
    </div>
    <Footer/>

    </>
  )
}