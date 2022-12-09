import Image from "next/image";
import {useRouter} from "next/router";
import { useRef } from "react";
import {SearchIcon,MicrophoneIcon, XIcon} from "@heroicons/react/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";


export default function searchHeader() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term.trim()) return;
        router.push(`/search?term=${term.trim()}&search-type=`);
    }
    return(
        <header className="sticky top-0 bg-white">
           <div className="flex w-full p-6 items-center">
           <Image 
           onClick={() => router.push("/")}
           width="120"
           height="40"
           objectFit="contain"
           alt="google-image"
           className="cursor-pointer"
           src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'}
           />
           <form action="" className="flex border border-gray200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-2-3xl items-center">
              <input className="w-full focus:outline-none" type="text" name="" id="" defaultValue={router.query.term} ref={searchInputRef}/>
              <XIcon onClick={()=> (searchInputRef.current.value = " ")} className="h-7 text-gray-500 cursor-pointer sm:mr-3"/>
              <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3 cursor-pointer"/>
              <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 cursor-pointer" onClick={search}/>
              <button onClick={search} type="submit" hidden />
           </form>
           <User className="ml-auto whitespace-nowrap" />
           </div>
           <SearchHeaderOptions/>
        </header>
    )
}