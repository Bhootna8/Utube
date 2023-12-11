"use client"

import React from 'react'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import MainContent from '@/Components/MainContent'
import SideBar from '@/Components/SideBar'

const page = () => {
  return (
  <main className="h-screen  grid-container">
    <Header/>
    <SideBar/>
    <Hero/>
    <MainContent />
  </main>
  )
}

export default page