'use client'

import { useState, useEffect } from "react"

import search from '@/public/search.svg'
import categories from "@/data/categoryData"
import countries from "@/data/countriesData"
import preLoaderSVG from '@/public/bouncing-circles.svg'
import Image from "next/image"

export default function extraNewsSection({ themeMode }: any) {
  const [news, setNews] = useState([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [result, setResult] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false) 

  async function handleSearch(){
    try {
      setLoading(true)
      const responce = await fetch(`
        https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${selectedCategory}&apiKey=38546be38b424463a794093a83b5822c
      `)
      if(!responce.ok){
        throw new Error("Something went wrong")
      }
      const data = await responce.json()
      // const slicedData = data.articles.slice(0, 10)

      setResult(data.articles)
      setLoading(false)
    } catch (error) {
      alert(error)
    }
  }

  console.log(result)

  return (
    <div className="flex flex-col relative flex-wrap m-2 md:mx-8">
      <div className="flex flex-row flex-wrap justify-between items-center">
        {/* Filter Section */}
        <div className="flex flex-row ">
          <div className="flex flex-col font-semibold font-sans">
            <h1>Category: </h1>
            <div className=" border-[#707a8a] border-4 rounded-md">
              <select 
                className={`${themeMode ? 'bg-[#282828]' : "bg-[#F5F5F5]"} font-bold text-md px-3 py-[6px] rounded-md`}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select:</option>
                {categories.map((data, index) => (
                  <option key={index} value={data.value}>
                    {data.category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col font-semibold font-sans ml-8">
            <h1>Country: </h1>
            <div className=" border-[#707a8a] border-4 rounded-md">
              <select 
                className={`${themeMode ? 'bg-[#282828]' : "bg-[#F5F5F5]"} font-bold text-md px-3 py-[6px] rounded-md`}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">Select:</option>
                {countries.map(data => (
                  <option key={data.country} value={data.isoCode}>
                    {data.country}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <button onClick={handleSearch} className={`${themeMode ? 'bg-[#121212]' : 'bg-white'} border-gray-600 border-4 w-[150px] h-[50px] rounded-md hover:opacity-75`}>
            Search
          </button>
        </div>
      </div>


      {/* Result News */}
      <div className="flex justify-center mt-8">
        {loading ? (
          <Image 
            src={preLoaderSVG}
            alt="Loader"
            className="mt-[150px] min-w-[185px]"
          />
        ) : result ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.map((article: any, index: number) => (
              <div key={index} className="flex flex-row">
                {article.title}
              </div>
            ))}
          </div>
        ) : null}
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
