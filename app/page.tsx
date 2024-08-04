'use client'

import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import type { ThemeState } from "./features/theme/themeSlice";
import NewsSection from "@/components/NewsSection";

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Home() {
  const [news, setNews] = useState([])
  const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)

  useEffect(() => {
    const fetchData = async () => {
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
          .filter((article: any) => article.content !== null);
         
        const shuffledNews: any = shuffleArray(filteredNews)
        setNews(shuffledNews)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  console.log(news)

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

        {/* News Section */}
        <NewsSection
          news={news}
        />

      </div>
    </div>
  );
}