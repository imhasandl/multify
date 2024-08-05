'use client'

import { useState, useEffect } from "react"

import search from '@/public/search.svg'
import categories from "@/data/categoryData"
import countries from "@/data/countriesData"

export default function extraNewsSection({ themeMode }: any) {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=technology&apiKey=38546be38b424463a794093a83b5822c&pageSize=15`)
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
         
        setNews(filteredNews)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  console.log(themeMode)

  return (
    <div className="flex flex-col relative flex-wrap m-2 md:mx-8">
      {/* Input Section */}
      <div className="flex flex-row justify-start">
        <div>
          <h1 className="font-semibold font-sans">Search for a specific thing: </h1>
          <div className="flex flex-row justify-start hover:opacity-80 transition duration-300">
            <input className={`${themeMode ? 'bg-[#282828]' : "bg-[#F5F5F5]"} px-3 py-[5px] min-w-[300px] border-[#707a8a] border-4 rounded-md`} type="text"/>
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col ml-4 font-semibold font-san">
          <h1>Category: </h1>
          <div className=" border-[#707a8a] border-4 rounded-md">
            <select className={`${themeMode ? 'bg-[#282828]' : "bg-[#F5F5F5]"} font-bold text-md px-3 py-[6px] rounded-md`}>
              <option value="">Select:</option>
              {categories.map((data, index) => (
                <option key={index} value={data.value}>
                  {data.category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col ml-4 font-semibold font-sans">
          <h1>Country: </h1>
          <div className=" border-[#707a8a] border-4 rounded-md">
            <select className={`${themeMode ? 'bg-[#282828]' : "bg-[#F5F5F5]"} font-bold text-md px-3 py-[6px] rounded-md`}>
              <option value="">Select:</option>
              {countries.map(data => (
                <option key={data.country} value={data.isoCode}>
                  {data.country}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="absolute right-5 ">
          <button className="p-4 h-auto">Search</button>
        </div>
      </div>


      {/* Result News */}
      <div className="h-[500px] mt-8">
        Result
      </div>
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
