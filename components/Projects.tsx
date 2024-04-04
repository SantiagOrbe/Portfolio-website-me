'use client'

import { projectsData } from '@/lib/data'
import SectionHeading from './section-heading'
import Project from './Project'
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
    const {ref} = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id='projects' className='text-black scroll-m-28 mb-28'>
        <SectionHeading>
            <div className='dark:text-white'>
             My projects
            </div>
        </SectionHeading>
        <div>
            {
                projectsData.map((project, index) => (
                    <Project {...project} key={index}/>
                ))
            }
        </div>
    </section>
  )
}

