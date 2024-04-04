'use client'
import SectionHeading from "./section-heading";
import {motion} from 'framer-motion'
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from '@/action/sendEmail'
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

export default function Contact() {
  const {ref} = useSectionInView('Contact', 0.5);

  return (
    <motion.section ref={ref} id='contact' className="text-gray-700 mb-20 sm:mb-28 
    w-[min(100%,38rem)] text-center" initial={{opacity: 0}} whileInView={{opacity: 1}}
    transition={{duration: 1}} viewport={{ once:true }}
    >
        <SectionHeading>
          <div className="dark:text-white">
            Contact me
          </div>
        </SectionHeading>
        <p className="text-gray-700 -mt-5 dark:text-white/80">
            Please contact me directly  at {" "}
            <a className="underline" href="mailto:example@gmail.com">example@gmail.com</a>{" "}
            or through this form
        </p>
        <form className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            const {data, error} = await sendEmail(formData)
            
            if (error) {
              toast.error(error)
              return;
            }
            toast.success('Email sent succesfully!👌')
          }}
        >
            <input required maxLength={200} className='h-14 px-4 rounded-lg dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none
            borderBlack' type="email" placeholder="Your email" name="senderEmail"/>
            <textarea required maxLength={5000} className="h-52 my-3 rounded-lg dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none
            borderBlack p-4" placeholder="Your message" name="message"/>
            <SubmitButton />
        </form>
    </motion.section>
  )
}
