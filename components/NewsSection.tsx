'use client'

import { useState } from "react"
import type { NewsBannerProps } from "@/types"
import '../app/globals.css'


// author
// content
// description
export default function NewsBanner({ 
   news //API CALLS
   // author
   // content
   // description
   // publishedAt
   // title
   // url
   // urlToImage
}: NewsBannerProps) {
   
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
   
   return (
      <div className="m-8">
            {news.map((newsItem: any, index: number) => (
               <div 
                  key={index} 
                  className={`${slide === index ? 'block' : 'hidden'} max-w-[800px] min-w-[700px] h-[450px]`}
               >
                  <h1>{newsItem.title}</h1>
               </div>
            ))}
      </div>
   )
}