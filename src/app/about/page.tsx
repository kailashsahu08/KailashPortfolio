import SectionTitle from '@/components/common/SectionTitle'
import { Timeline } from '@/components/common/timeline'
import ConstrainedBox from '@/components/core/constrained-box'
import ResponsiveBox from '@/components/core/ResponsiveBox'
import TransitionEffect from '@/components/TransitionEffect'
import ExperienceItem from '@/components/ui/ExperienceItem'
import RetroGrid from '@/components/ui/retro-grid'
import experiences from '@/data/experience'
import React from 'react'

const page = () => {
  return (
    <div>
      <TransitionEffect/>
      <RetroGrid />
      <ResponsiveBox
        classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center"
        id={'Experiences'}
      >
        <ConstrainedBox classNames="p-4 py-16">
          <SectionTitle>Experiences</SectionTitle>

          <Timeline
            data={experiences.map((exp, i) => ({
              title: exp.startDate + " - " + (exp.endDate || "Present"),
              content: <ExperienceItem key={`experience-${i}`} data={exp} />,
            }))}
          />
        </ConstrainedBox>
      </ResponsiveBox>
      
    </div>
  )
}

export default page