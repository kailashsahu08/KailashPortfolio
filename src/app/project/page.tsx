import ProjectCard from '@/components/ProjectCard'
import TransitionEffect from '@/components/TransitionEffect'
import RetroGrid from '@/components/ui/retro-grid'
import { projects } from '@/data/projects'
import React from 'react'

const page = () => {
  return (
    <div>
      <TransitionEffect/>
      <RetroGrid />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page