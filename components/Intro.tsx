'use client'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/section-context-provider'


export default function Intro() {
  const {ref} = useSectionInView('Home', 0.5);
  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
  
  return (
    <section ref={ref} id='home' className='scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <motion.div className='relative' 
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{type: "tween", duration:'0.2'}}
            >
                <Image 
                    src='https://yt3.googleusercontent.com/--bPCPEWvBw7FWX4iWokTQ8DmaZsdy98lPBs9QuhdzlnTrocT-Ljv98l1jvfs_GJ9BGuQ_pouhc=s900-c-k-c0x00ffffff-no-rj'
                    alt='GO JIVAN GO'
                    width='192'
                    height='192'
                    quality='95'
                    priority={true}
                    className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                />
                <motion.span className='text-4xl absolute bottom-0 right-0'
                  initial={{opacity: 0, scale: 0}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{type: "spring", stiffness:125, delay: 0.1, duration: 0.7}}
                >👋</motion.span>
            </motion.div>
        </div>
        <motion.h1
          className="text-black mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          > 
          <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
          <span className="font-bold">full-stack developer</span> with{" "}
          <span className="font-bold">8 years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </motion.h1>

        <motion.div className='
          flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium' initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }} transition={{delay: 0.1}}>
          <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-gray-950 active:scale-105 transition
          ' onClick={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}>
            Contact me here <BsArrowRight  className='opacity-70 group-hover:translate-x-1 transition' />
          </Link>
          <a href='GOJIVANGO.jpg' download={true} className='group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 border borderBlack active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60'>
            Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
          </a>
          <a href='https://linkedin.com' target='_blank' className='outline-none focus:scale-[1.15] borderBlack hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full dark:bg-white/10 dark:text-white/60'>
            <BsLinkedin  />
          </a>
          <a href='https://github.com' target='_blank' className='outline-none focus:scale-[1.15] borderBlack hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer bg-white text-[1.15rem] text-gray-700 p-4 flex items-center gap-2 rounded-full dark:bg-white/10 dark:text-white/60'>
            <FaGithubSquare />
          </a>
        </motion.div>
    </section>
  )
}
