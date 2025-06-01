import SectionTitle from '@/components/common/SectionTitle'
import ConstrainedBox from '@/components/core/constrained-box'
import GridBox from '@/components/core/GridBox'
import ResponsiveBox from '@/components/core/ResponsiveBox'
import TransitionEffect from '@/components/TransitionEffect'
import RetroGrid from '@/components/ui/retro-grid'
import SkillItem from '@/components/ui/SkillItem'
import skills from '@/data/skills'
import React from 'react'

const page = () => {
  return (
    <div>
      <TransitionEffect/>
       <RetroGrid />
       <ResponsiveBox
          classNames="min-h-screen items-center justify-center"
          id={'skills'}
        >
          <ConstrainedBox classNames="p-4 py-16">
            <SectionTitle>Skills</SectionTitle>

            <GridBox classNames="justify-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16">
              {skills.map((skill, index) => {
                return <SkillItem key={`skill-${index}`} data={skill} />;
              })}
            </GridBox>
          </ConstrainedBox>
        </ResponsiveBox>
    </div>
  )
}

export default page