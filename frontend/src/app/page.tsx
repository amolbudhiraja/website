import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { textColorDarkMode, gradientPatern, linkFormat } from "./components/ColorMode";
import Image from "next/image";
import memoji from "./media/memoji.png"
import Education from "./education/page";
import Portfolio from "./portfolio/page";
import About from "./experiences/page";


export default function Home() {
  return (
    <>
      <NavBar />
      
      <div>
        <HomeHeader />
        <About />
        <Education />
        <Portfolio />
      </div>

      <Footer />
    </>
  );
}

/** Introduction section where I introduce myself and link some of my affiliations. */
const HomeHeader = () => {
  return (
    <div className="px-10 lg:px-20">
    <div className="flex flex-col lg:flex-row items-center">
      <div className="m-5">
        <Image src={memoji} alt="Memoji of Amol Budhiraja" className="h-25 border-4 rounded-full border-blue-300"/>
      </div>
      <div className="text-center lg:text-start">
        <h1 className={`text-2xl font-bold ${gradientPatern}`}>Hi! I am Amol Budhiraja!</h1>
        <p className={`${textColorDarkMode} text-lg lg:w-4/6`}>I am studying <a href="https://eecs.berkeley.edu/" className={linkFormat}>EECS</a> @ <a href="https://www.berkeley.edu/" className={linkFormat}>Berkeley</a>. I am currently looking for new grad SWE and MLE roles. I have previously interned @ <a href="https://www.meta.com/" className={linkFormat}>Meta</a> and <a href="https://www.apple.com/" className={linkFormat}>Apple</a>. I am also researching the intersection of LLMs and IoT devices @ the <a href="https://netsys.cs.berkeley.edu/" className={linkFormat}>Berkeley NetSys Lab</a>. Additionally, I am the VP of Education @ <a href="https://mdb.dev/" className={linkFormat}>Mobile Developers of Berkeley</a>.</p>
      </div>
    </div>
  </div>
  ); 
}
