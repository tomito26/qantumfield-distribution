import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const AssetRecoveryAndDisposal = () => {
  return (
    <div> <div className="h-[450px] w-full relative">
    <Image
      src="/assets/Composting-waste.jpg"
      alt="Person collecting garbage"
      fill
      className="absolute object-cover"
    />
    <div className="bg-[#0C4E1A]/70 h-full flex items-center w-full z-10 absolute px-4 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
      <div>
        <h1 className="md:text-6xl text-3xl font-bold text-white mb-6 ">Asset Recovery And Disposal</h1>
        <p className="text-white flex text-base md:w-7/12">
          <Link
            href="/"
            className="text-white hover:text-green-950 text-base"
          >
            Home
          </Link>{" "}
          <ChevronRight className="h-6 w-6 stroke-white" />Asset Recovery And Disposal
        </p>
      </div>
    </div>
  </div></div>
  )
}

export default AssetRecoveryAndDisposal