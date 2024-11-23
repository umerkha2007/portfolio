import React, { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Briefcase, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface TimelineItemProps {
  item: {
    year: string
    company: string
    logo: string
    position: string
    description: string
    skills: string[]
    color: string
  }
  index: number
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const isEven = index % 2 === 0
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row items-center mb-16 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
    >
      <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:pl-8' : 'md:pr-8'} mb-4 md:mb-0`}>
        <motion.div
          className={`bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4`}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center mb-4">
            <Image src={item.logo} alt={`${item.company} logo`} width={50} height={50} className="rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-foreground">{item.position}</h3>
              <h4 className="text-lg text-muted-foreground">{item.company}</h4>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className={`${item.color} bg-opacity-20 text-opacity-90 text-xs font-semibold px-2.5 py-0.5 rounded`}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="w-full md:w-16 flex justify-center items-center">
        <div className="relative">
          <motion.div
            className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center z-10 relative shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Briefcase className="text-white" size={24} />
          </motion.div>
        </div>
      </div>
      <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8' : 'md:pl-8'} mt-4 md:mt-0`}>
        <motion.div
          className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h5 className="text-lg font-semibold mb-2">Key Achievements</h5>
          <ul className="list-none space-y-2">
            <li className="flex items-start">
              <ChevronRight className={`mr-2 ${item.color} flex-shrink-0`} />
              <span>Led a team of 5 developers to deliver a critical project on time</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className={`mr-2 ${item.color} flex-shrink-0`} />
              <span>Improved system performance by 40% through code optimization</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className={`mr-2 ${item.color} flex-shrink-0`} />
              <span>Implemented new features that increased user engagement by 25%</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}