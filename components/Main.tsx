import Image from "next/image";
import {SearchIcon,MicrophoneIcon} from "@heroicons/react/solid";


export default function Main(props) {
    return(
        <>
         <form action="" className="flex flex-col items-center mt-40">
           <Image 
           width="300"
           height="100"
           objectFit="cover"
           alt="google-image"
           src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'}
           />
           <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within: shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
             <SearchIcon  className="h-5 mr-3 text-gray-500 cursor-pointer"/>
             <input ref={props.searchInputRef} type="text" name="" id="" className="flex-grow focus:outline-none"/>
             <MicrophoneIcon className="h-5 text-gray-500 cursor-pointer" onClick={props.search} />
           </div>
           <div className="flex flex-col sm:flex-row w-[50%] mt-8 sm:space-y-0 sm:space-x-4 justify-center">
             <button onClick={props.search} className='btn'>Google Search</button>
             <button className='btn'>I'm Feeling Lucky</button>
           </div>
    </form>
        </>
    )
}