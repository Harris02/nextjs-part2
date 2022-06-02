import Link from "next/link"
import Image from "next/image"
export default function Gambar ({asal,tautan,width,height}: any){
    return(
        <Link href={tautan}><a><Image src={asal} alt="gambar-Link" width={width} height={height}/></a></Link>
    )
}