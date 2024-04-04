'use client'

import React, { useContext } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const {ref} = useSectionInView('Experience', 0.5);
  const {theme} = useTheme()

  return (
    <section ref={ref} id='experience' className="text-black scroll-mt-28 mb-28 sm:mb-40">
        <SectionHeading>
          <div className="dark:text-white">
           My experience
          </div>
        </SectionHeading>
        <VerticalTimeline  animate={true} lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement visible={true}
             contentStyle={{
             background: theme === 'light' ? "#f3f44f6" : 'rgba(255, 255, 255, 0.05)',
             boxShadow: "none",
             border: "1px solid rgba(0, 0, 0, 0.05)",
             textAlign: "left",
             padding: "1.3rem 2rem",
             color: "white"
             }}
             contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
                }}
                date={item.date}  
                icon={item.icon}
             iconStyle={{
                background: theme === 'light' ? "white" : 'rgba(255, 255, 255, 0.15)',
                fontSize: "1.5rem",
             }}
             > 
                <h3 className='text-black font-semibold capitalize dark:text-white'>{item.title}</h3>
                <p className='font-normal !mt-0 dark:text-white'>{item.location}</p>
                <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{item.description}</p>
            </VerticalTimelineElement>
            </React.Fragment>
        ))}
        </VerticalTimeline>
    </section>
  )
}
