import React from 'react'
import TransitionEffect from '@/components/TransitionEffect'
import { HoverLayoutGrid } from '@/components/common/HoverLayoutGrid'
import SectionTitle from '@/components/common/SectionTitle'
import ResponsiveBox from '@/components/core/ResponsiveBox'
import ConstrainedBox from '@/components/core/constrained-box'
import RetroGrid from '@/components/ui/retro-grid'
import services from '@/data/services'

const page = () => {
    return (
        <div>
          <TransitionEffect/>
           <RetroGrid />
           <ResponsiveBox
          classNames=" min-h-screen items-center justify-center rounded-md"
        >
          <ConstrainedBox classNames="p-4 py-16 z-20">
            <SectionTitle>Services</SectionTitle>
            <HoverLayoutGrid cards={services} />
          </ConstrainedBox>
        </ResponsiveBox>
        </div>
      )
}

export default page