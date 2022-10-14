import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

       {/* Container */}
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
         <p className='text-[#eff1f3]'>Hi,my name is</p>
         <h1 className='text-4xl sm:text-7xl font-bold text-[#eff1f3]'>Siddharth Kothare</h1>
         <h2 className='text-3xl sm:text-7xl font-bold text-[#cadbeb]'>I'm begineer at Web Development</h2>
         <p className='text-[#eff1f3] py-4 max-w-[700px]'>I typically use Vs Code as editor and use HTML/CSS,
            JavaScript and Iam learning new Technologies like
            React js,Tailwindcss.
            This portfolio website is built by these Frameworks</p>
         <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                View Work
              <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
              </span> 
            </button>
         </div>
       </div>
    </div>
  )
}

export default Home