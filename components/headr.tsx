import Image from "next/image";
import React from "react";
const Headr: React.FC = () => {
    return (
        <main>
        <section className='min-h-screen flex flex-col items-center justify-center '>
            <video autoPlay loop muted playsInline  className="absolute w-full h-full object-cover"> 
            <source  src="/assets/bg.mp4" type="video/mp4"/>
            <source  src="/assets/bg.webm" type="video/webm"/>
            </video>
            <div className=" flex-grow-0 pt-10 transition-opacity duration-1000 ">
            <Image 
            src="/assets/logo.png"
            width={128/3}
            height={114/3}
            alt="scroll down"
            />
          </div>
          <div className=" p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
          <h1 className="mb-6 text-5xl lg:text-7xl">Sifat Bhatia</h1>
          <h2 className="mb-2 text-3xl lg:text-6xl tracking-tight">
              <span>Full Stack / Wordpress / Squarespace Developer</span></h2>
          <h3 className="mb-2 text-3xl lg:text-6xl tracking-tight">New Site Coming Soon!</h3> 
          <div className="flex gap-7"><a href="/portfolio"><button className="rounded">Portfolio ↗</button></a>
          <a href="https://smallpdf.com/file#s=7bbc4686-1c0d-4b0f-b38a-ed7bf3a6326f"><button className="rounded">Resume ↗</button></a>
          </div>
          
          </div>
          
          {/* <div className=" flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
            <Image 
            src="/assets/down.png"
            width={188/3}
            height={120/3}
            alt="scroll down"
            />
          </div> */}
        </section>
       
      </main>
    )
}

export default Headr