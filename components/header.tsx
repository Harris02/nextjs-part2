const Header=()=>{
    return(
    <div className="flex flex-row truncate px-28 shadow-sm shadow-black items-center h-24 w-full text-white bg-slate-800 sticky top-0 z-10  md:justify-center  ">
        <h1 className="font-bold text-xl basis-11/12 md:hidden">XanaDev</h1>
        <div className="flex flex-row justify-between gap-10 ">
        <h1 className="hover:border-b-2 hover:border-yellow-300 hover:text-yellow-400 ">Home</h1>
        <h1 className="hover:border-b-2 hover:border-yellow-300 hover:text-yellow-400 ">About Me</h1>
        <h1 className="hover:border-b-2 hover:border-yellow-300 hover:text-yellow-400  ">Project</h1>
        </div>
    </div>
    )
}
export default Header;