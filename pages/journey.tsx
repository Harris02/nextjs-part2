import { NextPage } from "next"
import Header from "../components/header"
import HeadMats from "../components/headMats"

export default function Journey(){
    return(
        <div>
            <HeadMats img="/journey.svg" title="My Journey"/>
            <Header/>
            <h1>My Journey</h1>
        </div>
    )
}