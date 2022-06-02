import Image from "next/image"
import Link from "next/link"
import Gambar from "./gambarLink"
export default function Footer (){
    return(
        <div className="bg-gray-200">
        <hr className="border border-black my-30" />
        <div className="flex flex-row justify-center space-x-10 mt-8">
        <Gambar tautan="/" alt="wa" asal="/whatsapp.svg" width={30} height={30}/>
        <Gambar tautan="/about" alt="ig" asal="/instagram.svg" width={30} height={30} />
        <Gambar tautan="/" alt="in" asal="/linkedin.svg" width={30} height={30} />
        </div>
        <div className="text-center py-10">
         <p>Khairul Ihsannudin &#169; 2022</p>
        </div>
        </div>
        )
}