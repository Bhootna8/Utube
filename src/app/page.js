"use client"
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import MainContent from '@/Components/MainContent'
import SideBar from '@/Components/SideBar'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="h-screen  grid-container">
      <Header/>
      <SideBar/>
      <Hero/>
      <MainContent />
    </main>
  )
}
