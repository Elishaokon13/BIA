'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import Images from './images'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'

export default function Features() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Explore the solutions</h1>
            <p className="text-xl text-gray-600">Welcome to Blockchain In Africa (BIA).
              At BIA, we're not just building a community; we're fostering a movement.Become part of our dynamic ecosystem and embark on a gamified adventure into the world of web3.</p>
          </div>

          {/* Section content */}

          <div className="max-w-sm mx-auto grid gap-6 justify-center md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
            <div className="relative flex flex-col items-center p-6"> {/* Added margin for horizontal spacing */}
              <div className="relative flex flex-col h-full p-8 text-white bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg shadow-xl lg:p-16 lg:pr-12 lg:pl-16 lg:pt-20 lg:pb-12">
                <div className="absolute top-0 right-0 hidden h-full bg-cover bg-no-repeat bg-center rounded-l-lg lg:block" style={{ backgroundImage: `url(${FeaturesElement})`, width: '50%', transform: 'translateX(50%)' }}></div>
                <div className="relative z-10">
                  <h2 className="h4">For Community</h2>
                  <p className="mt-2 mb-6 text-sm">Join a vibrant community of blockchain enthusiasts, developers, and investors. Discover new projects, share ideas, and collaborate with like-minded individuals.</p>
                  <a className="btn-sm text-teal-500 bg-white hover:text-teal-500 hover:bg-black" href="#0">Learn more</a>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-center p-6"> {/* Added margin for horizontal spacing */}
              <div className="relative flex flex-col  p-8 text-white bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg shadow-xl lg:p-16 lg:pr-12 lg:pl-16 lg:pt-20 lg:pb-12">
                <div className="absolute top-0 right-0 hidden h-full bg-cover bg-no-repeat bg-center rounded-l-lg lg:block" style={{ backgroundImage: `url(${FeaturesElement})`, width: '50%', transform: 'translateX(50%)' }}></div>
                <div className="relative z-10">
                  <h2 className="h4">For Projects</h2>
                  <p className="mt-2 mb-6 text-sm">Maximize your blockchain project's exposure! Join our platform to connect with a global community of passionate enthusiasts eager to engage with your work.</p>
                  <a className="btn-sm text-teal-500 bg-white hover:text-teal-500 hover:bg-black" href="#0">Learn more</a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}