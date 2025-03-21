"use client"
import Link from "next/link"
import { useTranslation } from "react-i18next"

import Bounce from "@/components/animated/uibeats/bounce"

export const GalleryMultiple = () => {
  const { t } = useTranslation()
  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <Bounce className="font-inter text-center text-[80px] font-semibold leading-[78px] text-[#FDFDFD] max-lg:max-w-[calc(100vw-4rem)] max-lg:text-[60px] max-lg:leading-[60px]">
        {t(`Get inspired by`)} <br />
        <span className="bg-gradient-to-r from-[#CC00FF] to-[#0099FF] bg-clip-text text-transparent">
          {t(`other creators`)}
        </span>
      </Bounce>
      <Bounce className="hidden max-w-[1278px] gap-8 pt-12">
        <button className="font-inter flex h-[16.8px] w-[100.295px] flex-shrink-0 cursor-pointer flex-col justify-center text-[14px] font-medium leading-[22px] text-white">
          Trending
        </button>
        <button className="font-inter flex h-[16.8px] w-[100.295px] flex-shrink-0 cursor-pointer flex-col justify-center text-[14px] font-medium leading-[22px] text-white/50">
          Vibrant Colors
        </button>
        <button className="font-inter flex h-[16.8px] w-[100.295px] flex-shrink-0 cursor-pointer flex-col justify-center text-[14px] font-medium leading-[22px] text-white/50">
          Adventure
        </button>
        <button className="font-inter flex h-[16.8px] w-[100.295px] flex-shrink-0 cursor-pointer flex-col justify-center text-[14px] font-medium leading-[22px] text-white/50">
          Playful
        </button>
        <button className="font-inter flex h-[16.8px] w-[100.295px] flex-shrink-0 cursor-pointer flex-col justify-center text-[14px] font-medium leading-[22px] text-white/50">
          Passion
        </button>
        <button className="font-inter flex h-[16.8px] w-[100.295px] flex-shrink-0 cursor-pointer flex-col justify-center text-[14px] font-medium leading-[22px] text-white/50">
          Humor
        </button>
        <button className="font-inter flex h-[16.8px] w-[100.295px] flex-shrink-0 cursor-pointer flex-col justify-center text-[14px] font-medium leading-[22px] text-white/50">
          Wildlife
        </button>
        <button className="font-inter flex h-[16.8px] w-[100.295px] flex-shrink-0 cursor-pointer flex-col justify-center text-[14px] font-medium leading-[22px] text-white/50">
          Futuristic
        </button>
        <button className="font-inter flex h-[16.8px] w-[100.295px] flex-shrink-0 cursor-pointer flex-col justify-center text-[14px] font-medium leading-[22px] text-white/50">
          Sunset
        </button>
      </Bounce>

      <Bounce className="relative">
        <div className="absolute -right-40 bottom-12 h-[288.328px] w-[854.914px] flex-shrink-0 rounded-[854.914px] bg-[rgba(204,0,255,0.32)] blur-[121.55000305175781px] filter"></div>
        <img
          src="/assets/trending.png"
          alt=""
          className="relative mt-16 h-auto w-full max-w-[884px] px-8"
        />
      </Bounce>

      <Bounce className="">
        <Link
          href={"/explore"}
          className="mb-24 mt-10 flex h-10 items-center justify-center gap-2 rounded-full bg-white px-4 text-black hover:bg-slate-100"
        >
          {t(`View more`)}
        </Link>
      </Bounce>
    </div>
  )
}
