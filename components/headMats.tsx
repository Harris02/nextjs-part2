import Head from "next/head";
import Image from "next/image";

export default function HeadMats({title,img}:any){
    return(
    <div>
      <Head>
        <link rel="shortcut icon" href={img}/>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
            
        
    )
}