'use client'

import { useState } from "react"
import type { NewsBannerProps } from "@/types"
import '../app/globals.css'

export default function NewsBanner({
   news
   // API data route
      // author,
      // content,
      // description,
      // publishedAt,
      // title,
      // url,
      // urlToImage,
}: NewsBannerProps) {

   const [slide, setSlide] = useState<number>(0)

   function nextSlide(){
      if(slide == news.length -1){
         setSlide(0)
      }
      setSlide((prev) => prev + 1)
   }

   function prevSlide(){
      if(slide == 0){
         setSlide(news.length - 1)
      }
      setSlide((prev) => prev - 1)
   }

   console.log(slide)

  return (
    <div className="w-full h-[100vh] ">
      {/* <button onClick={nextSlide} className="arrow arrow-left bg-red-700">Prev</button> */}
      <div className="flex justify-center items-center m-2 flex-wrap ">
         {news.map((news: any, index: number) => (
            <img 
               alt={news.title}
               src={news.urlToImage} 
               key={index} 
               className={` ${slide === index ? "slide" : 'slide hidden'} max-w-[800px] min-w-[700px] h-[450px]`}
            />
         ))}

         
      </div>
      {/* <button onClick={prevSlide} className="arrow arrow-right bg-red-700">Next</button> */}
    </div>
  )
}
