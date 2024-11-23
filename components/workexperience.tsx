"use client";
import React from 'react'
import { TimelineItem } from '../components/ui/TimelineItem'
import { TimelineRuler } from '../components/ui/TimelineRuler'

// ... existing code ...

const workExperience = [
    {
      id: 1,
      year: '2024',
      company: 'BrainStation',
      logo: '/placeholder.svg?height=100&width=100',
      position: 'Senior Software Engineering Educator',
      description: 'Designing and updating curriculum, delivering lectures, and mentoring students.',
      skills: ['Curriculum Development', 'Instruction', 'Mentorship', 'Assessment'],
      color: 'bg-blue-500'
    },
    {
      id: 2,
      year: '2021',
      company: 'MediaValet',
      logo: '/placeholder.svg?height=100&width=100',
      position: 'Senior Software Engineer',
      description: 'Led initiatives with React, Angular, ASP.NET, Azure, and implemented CI/CD pipelines.',
      skills: ['React', 'Angular', 'ASP.NET', 'Azure', 'CI/CD'],
      color: 'bg-green-500'
    },
    {
      id: 3,
      year: '2020',
      company: 'MonetizeMore',
      logo: '/placeholder.svg?height=100&width=100',
      position: 'Web Developer',
      description: 'Applied Agile methodologies, optimized ad placements, and led React JS projects.',
      skills: ['JavaScript', 'AWS', 'React', 'Agile'],
      color: 'bg-purple-500'
    },
    {
      id: 4,
      year: '2019',
      company: 'Doctors 365',
      logo: '/placeholder.svg?height=100&width=100',
      position: 'Software Engineer',
      description: 'Rebuilt multimedia software packages and led e-commerce platform development.',
      skills: ['JavaScript', 'TypeScript', 'Angular', 'RESTful APIs'],
      color: 'bg-red-500'
    },
    {
      id: 5,
      year: '2018',
      company: 'Smart Coders DMCC Limited',
      logo: '/placeholder.svg?height=100&width=100',
      position: 'Software Engineer',
      description: 'Led a team of developers and managed projects across various industries.',
      skills: ['iOS', 'Android', 'Web Development', 'Project Management'],
      color: 'bg-yellow-500'
    },
    {
      id: 6,
      year: '2016',
      company: 'Shoclef Corporation Limited',
      logo: '/placeholder.svg?height=100&width=100',
      position: 'Software Developer',
      description: 'Developed backend in ASP.NET and integrated various APIs for e-commerce apps.',
      skills: ['ASP.NET', 'HTML/CSS/JavaScript', 'API Integration'],
      color: 'bg-teal-500'
    }
  ]


export const WorkExperience: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-secondary">
      <h1 className="text-4xl font-bold text-center mb-16 text-foreground">My Software Engineering Journey</h1>
      <div className="relative">
        <TimelineRuler startYear={2015} endYear={2023} />
        {workExperience.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}