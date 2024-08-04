'use client'

import { useState } from "react"
import type { NewsBannerProps } from "@/types"
import '../app/globals.css'

export default function NewsBanner({ news }: NewsBannerProps) {

   const [slide, setSlide] = useState<number>(0)

   function nextSlide() {
      if (slide === news.length - 1) {
         setSlide(0)
      } else {
         setSlide(prev => prev + 1)
      }
   }

   function prevSlide() {
      if (slide === 0) {
         setSlide(news.length - 1)
      } else {
         setSlide(prev => prev - 1)
      }
   }

   console.log(slide)

   return (
      <div className="w-full">
         <div className="flex flex-row justify-center items-center m-2 flex-wrap">
            {news.map((newsItem: any, index: number) => (
               <div key={index} className={`slide ${slide === index ? 'slide-active' : 'slide-hidden'} max-w-[800px] min-w-[700px] h-[450px]`}>
                  <img alt={newsItem.title} src={newsItem.urlToImage} />
                  <h1>{newsItem.content}</h1>
               </div>
            ))}
         </div>
      </div>
   )
}