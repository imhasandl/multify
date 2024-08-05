'use client'

import { useState, useEffect,  } from "react"
import type { NewsBannerProps } from "@/types"
import categories from "@/data";

export default function NewsBanner({ news }: NewsBannerProps) {
   const [slide, setSlide] = useState<number>(0)

   function nextSlide() {
      slide === news.length - 1 ? setSlide(0) : setSlide(prev => prev + 1)
   }
   
   function prevSlide() {
      slide === 0 ? setSlide(news.length - 1) : setSlide(prev => prev - 1)
   }
   
   return (
      <div className="flex m-2 md:m-8">
         {news.map((newsItem: any, index: number) => (
            <div className={`${slide === index ? 'block' : 'hidden'} w-full overflow-hidden z-auto`}>
               <div className="flex justify-center w-full ">
                  <a href={newsItem.url}>
                     <img className="rounded-lg shadow-lgпше  max-h-[500px] hover:shadow-xl" alt={newsItem.title} src={newsItem.urlToImage}/>
                  </a>
               </div>
               
               <div className="flex flex-col m-1 md:m-5 font-serif">
                  <div className="flex flex-row items-center">
                     <h1 className="font-bold mt-1 text-md md:text-2xl ">
                        <a href={newsItem.url}>
                           {newsItem.title}
                        </a>
                     </h1>
                     <span className="opacity-50 ml-auto text-sm md:text-md">Author: {newsItem.author}</span>
                  </div>

                  <div className="mt-8 flex flex-col">
                     <p className="text-sm opacity-50">
                        <a href={newsItem.url}>
                           {newsItem.description}
                        </a>
                     </p>
                     <h2 className="mt-4">
                        <a href={newsItem.url}>
                           {newsItem.content}
                        </a>
                     </h2>
                        <div className="flex flex-row justify-center items-center mt-4">
                           <button className="w-[250px] h-[50px] bg-gray-500 mr-5 rounded-lg font-mono font-bold hover:opacity-40 transition duration-350" onClick={prevSlide}>Previous</button>
                           <button className="w-[250px] h-[50px] bg-gray-500 mr-5 rounded-lg ml-5 font-mono font-bold hover:opacity-40 transition duration-350" onClick={nextSlide}>Next</button>
                           <span className="opacity-50 text-sm md:text-md ml-auto font-mono font-bold">
                              Published Day: {new Date(newsItem.publishedAt).toLocaleDateString()}
                           </span>
                        </div>
                  </div>

               </div>
            </div>
         ))}
      </div>
   )
}

//API CALLS 
   // author
   // content
   // description
   // publishedAt
   // title
   // url
   // urlToImage