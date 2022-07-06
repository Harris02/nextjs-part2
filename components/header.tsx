import Link from "next/link";
const Header=()=>{
    return(
    <div className="flex flex-row truncate px-28 shadow-sm shadow-black items-center h-24 w-full text-white bg-slate-800 sticky top-0 z-10  md:justify-center  ">
        <h1 className="font-bold text-xl basis-11/12 md:hidden">XanaDev</h1>
        <div className="flex flex-row justify-between gap-10 ">
        <Link href="/"><a><h1 className="hover:border-b-2 hover:border-yellow-300 hover:text-yellow-400 ">Home</h1></a></Link>
        <Link href="/aboutMe"><a><h1 className="hover:border-b-2 hover:border-yellow-300 hover:text-yellow-400 ">About Me</h1></a></Link>
        <Link href="https://github.com/Harris02" passHref={true}><a><h1 className="hover:border-b-2 hover:border-yellow-300 hover:text-yellow-400  ">Project</h1></a></Link>
        </div>
    </div>
    )
}
export default Header;