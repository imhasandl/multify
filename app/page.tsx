'use client'

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { ThemeState } from "./features/theme/themeSlice";

import HeadNewsSection from '@/components/HeadNewsSection'
import ExtraNewsSection from "@/components/ExtraNewsSection";

import preLoaderSVG from '@/public/bouncing-circles.svg'
import Image from "next/image";

export default function Home() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState<boolean>(true)

  const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=president&apiKey=38546be38b424463a794093a83b5822c&pageSize=15`)
        if(!response.ok){
          throw new Error("Something went wrong")
        }
        const data = await response.json()
          // FILTERS
        const filteredNews = data.articles
          .filter((article: any) => article.urlToImage !== null)
          .filter((article: any) => article.author !== null)
          .filter((article: any) => article.description !== null)
          .filter((article: any) => article.title !== null)
          .filter((article: any) => article.content !== null)
          .filter((article: any) => article.publishedAt !== null);

          const shuffledNews = filteredNews.sort(() => Math.random() - 0.5);
         
        setNews(shuffledNews)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div 
      className={`
      w-full flex justify-center transition duration-150 
      ${theme ? 'bg-[#121212]' : 'bg-[#F5F5F5]'}  
    `}>
      <div 
        className={`
          max-w-[1150px] w-full transition duration-150 shadow-2xl z-1
          ${theme ? 'bg-[#282828] text-white' : 'bg-white'}
        `}> 


        <div className="flex justify-center items-center w-full h-auto">
          {loading ? (
            <Image 
              src={preLoaderSVG}
              alt="Loader"
              className="mt-[150px] min-w-[185px]"
            />
          ) : (
            <div className="flex flex-col h-auto w-full">
              {/* News Head Section Component */}
              <HeadNewsSection
                news={news}
              />

              {/* News Bottom Section Component */}
              <ExtraNewsSection 
                themeMode={theme}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}