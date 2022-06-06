import Image from "next/image"
export default function Container({asal,bahasa}:any){
    return(
        <div className='shadow-md shadow-black px-20 py-5 text-center bg-slate-600 rounded-xl md:px-10 sm:px-5 animate-fade'>
          <Image alt="container" src={asal} width={100} height={100} />
          <blockquote>{bahasa}</blockquote>
        </div>  
    )
}