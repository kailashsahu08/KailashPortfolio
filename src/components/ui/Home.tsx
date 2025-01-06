import { div } from 'framer-motion/client'
import React from 'react'
import { FlipWords } from '../common/FlipWords'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen '>
        <div className="inline-flex items-center">
            <p className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--textColor)] text-[var(--bgColor)] font-bold text-center">
              Hi there, I am
            </p>
            <FlipWords
              words={["Kailash Sahu", "@KailashSahu", "@KailashSahu08"]}
              className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold text-center"
            />
        </div>
        <p className="text-sm/normal md:text-base/normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)]">
            Software Engineer & Full Stack Developer
        </p>
        <div className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row">
            <Link
                className="relative flex flex-row items-center justify-center outline-none bg-transparent border border-primaryColor rounded-[var(--borderRadius)] py-3 px-6 text-primaryColor no-underline text-base font-inherit capitalize font-semibold leading-6 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:text-white group min-w-[12rem] "
                href="#"
                target="_blank"
                >
                    Let&apos;s Talk
            </Link>
            <Link
                className="relative flex flex-row items-center justify-center min-w-[12rem] outline-none bg-transparent border border-primaryColor rounded-[var(--borderRadius)] py-3 px-6 text-primaryColor no-underline text-base font-inherit capitalize font-semibold leading-6 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:text-white group"
                href="#"
                target="_blank"
            >
                Download Resume
            </Link>
        </div>
    </div>
  )
}

export default Home