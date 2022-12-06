import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import {useRouter} from "next/router";
import {useRef} from 'react';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef?.current?.value;
    if (!term.trim()) return; 
    router.push(`/search?term=${term.trim()}`)
  }

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
   <Main searchInputRef={searchInputRef} search={search}/>
    {/* Footer */}  
   <Footer/>
    </div>
  )
}
