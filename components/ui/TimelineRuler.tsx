import React from 'react'
import { motion } from 'framer-motion'

interface TimelineRulerProps {
  startYear: number
  endYear: number
}

export const TimelineRuler: React.FC<TimelineRulerProps> = ({ startYear, endYear }) => {
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i)

  return (
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-muted">
      <motion.div
        className="h-full w-full bg-gradient-to-b from-blue-500 via-green-500 to-red-500"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      {years.map((year, index) => (
        <div
          key={year}
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{ top: `${(index / (years.length - 1)) * 100}%` }}
        >
          <div className="relative">
            <div className="absolute right-2 top-1/2 transform translate-y-1/2 w-2 h-2 bg-white border-2 border-gray-500 rounded-full" />
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white px-2 py-1 rounded shadow text-sm font-semibold">
              {year}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}