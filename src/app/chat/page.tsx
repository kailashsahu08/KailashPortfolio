import TransitionEffect from '@/components/TransitionEffect'
import RetroGrid from '@/components/ui/retro-grid'
import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <TransitionEffect/>
      <RetroGrid />
      <h1 className="text-3xl font-bold mb-8">Chat Page</h1>
    </div>
  )
}

export default page