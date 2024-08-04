'use client'

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { ThemeState } from "./features/theme/themeSlice";
import NewsBanner from "@/components/NewsBanner";

export default function Home() {
  const [news, setNews] = useState([])
  const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=president&apiKey=38546be38b424463a794093a83b5822c&pageSize=25`)
        if(!response.ok){
          throw new Error("Something went wrong")
        }
        const data = await response.json()
        const filteredNews = data.articles.filter((article: any) => article.urlToImage !== null)
        const shuffledNews: any = shuffleArray(filteredNews)
        setNews(shuffledNews)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  console.log(news)


  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div 
      className={`
<<<<<<< HEAD
      w-full  h-[100%] flex justify-center transition duration-150
=======
      w-full h-[100%] flex justify-center transition duration-150
>>>>>>> c858e6a (height-change)
      ${theme ? 'bg-[#121212]' : 'bg-[#F5F5F5]'}  
    `}>
      <div 
        className={`
          max-w-[1150px] w-full h-[100%] transition duration-150 shadow-2xl
          ${theme ? 'bg-[#282828] text-white' : 'bg-white'}
        `}> 
        
<<<<<<< HEAD
        <NewsBanner
          news={news}
        />  

<NewsBanner
          news={news}
        /> 
        <NewsBanner
          news={news}
        /> 

        <NewsBanner
          news={news}
        /> 
        <NewsBanner
          news={news}
        /> <NewsBanner
        news={news}
      /> 

      
=======
        <div className="flex">
            <NewsBanner
              news={news}
            />        
        </div>
>>>>>>> c858e6a (height-change)
      </div>
    </div>
  );
}