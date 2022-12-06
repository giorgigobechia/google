import Head from 'next/head'
import Header from '../components/Header';
import Image from "next/image";
import {SearchIcon,MicrophoneIcon} from "@heroicons/react/solid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google|Giorgi Gobechia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/* Header */}  
    <Header/>
    {/* Body */}  
    <form action="" className="flex flex-col items-center mt-40">
      <Image 
       width="300"
       height="100"
       objectFit="cover"
      src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'}/>
      <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within: shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
         <SearchIcon  className="h-5 mr-3 text-gray-500"/>
         <input type="text" name="" id="" className="flex-grow focus:outline-none"/>
         <MicrophoneIcon className="h-5 text-gray-500" />
      </div>
      <div className="flex flex-col sm:flex-row w-[50%] mt-8 sm:space-y-0 sm:space-x-4 justify-center">
      <button className='btn'>Google Search</button>
      <button className='btn'>I'm Feeling Lucky</button>
      </div>
    </form>
    {/* Footer */}  
   
    </div>
  )
}
