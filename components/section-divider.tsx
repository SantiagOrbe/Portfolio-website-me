'use client'
import {motion} from 'framer-motion'


export default function SectionDivider() {
  return (
    <motion.div className="bg-gray-200 my-24 h-16 w-1 
    rounded-full hidden sm:block dark:bg-opacity-20"
    animate={{opacity: 1, y: 0}}
    initial={{opacity: 0, y: 100}}
    transition={{delay:0.125}}
    >

    </motion.div>
  )
}
