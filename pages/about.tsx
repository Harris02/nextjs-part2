import { NextPage } from "next"
import Header from "../components/header"
import HeadMats from "../components/headMats"
import Image from "next/image"
import Footer from "../components/footer"

export default function About(){
    return(
        <div>
            <HeadMats img="/about.svg" title="About Me"/>
            <Header/>
            <h1 className="text-center text-2xl my-10">About Me</h1>
            <div className="w-1/2 rounded-xl mx-auto border-0 text-center bg-gray-300 p-10 space-y-5 mb-10  ">
                <Image className="rounded-full" src="/Introducing.jpg" width={300} height={300}  />
                <h1 className=" overflow-ellipsis text-xl">Hello! I am Khairul Ihsannudin from Kebumen. Well I have nothing to tell you guys. So, I don't really give a shit about this. That's all. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugit nemo quasi ad fuga, expedita quod deleniti asperiores omnis libero exercitationem neque officia assumenda quisquam minima! Suscipit cupiditate amet optio.</h1> 
            </div>
            <Footer/>
            
        </div>
    )
}