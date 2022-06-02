import Image from "next/image"
import Link from "next/link"
import Gambar from "./gambarLink"

function Style({p}:any){
    return(
    <div className="px-3 hover:border-b-2 border-black hover:transform hover:origin-left">
        {p} 
    </div>
    )
}
export default function Header(){    
    return(
        <div className="sticky top-0 bg-white z-10">
        <nav className="flex flex-row items-center justify-center" >
        
        <div className="basis-4/5 p-3 ml-3">
        <Gambar asal="/favicon.ico" alt="kepala" tautan="/" width={50} height={50}/>
        </div>

        <div className="basis-1/5 flex flex-row">
        <Link href="/"><a><Style p="Home" /></a></Link>
        <Link href="/about"><a> <Style p="About"/></a></Link>
        <Link href="/journey"><a> <Style p="Journey"/></a></Link>
        </div>
        
        </nav>
        <hr className="block border-b-100 border-black"/>
        </div>
    )
}