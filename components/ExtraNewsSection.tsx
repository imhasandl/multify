'use client'

import { useState, useEffect } from "react"

import search from '@/public/search.svg'
import categories from "@/data/categoryData"
import countries from "@/data/countriesData"
import preLoaderSVG from '@/public/bouncing-circles.svg'
import Image from "next/image"

export default function extraNewsSection({ themeMode }: any) {
  const [input, setInput] = useState<string>('')
  const [result, setResult] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false) 

  async function handleSearch(){
    try {
      setLoading(true)
      const responce = await fetch(`
        https://newsapi.org/v2/everything?q=${input}&apiKey=38546be38b424463a794093a83b5822c
      `)
      if(!responce.ok){
        throw new Error("Something went wrong")
      }
      const data = await responce.json()

      setResult(data.articles)
      setLoading(false)
    } catch (error) {
      alert(error)
    }
  }

  console.log(input)

  return (
    <div className="flex flex-col relative flex-wrap m-2 md:mx-8">
      <div className="flex flex-row flex-wrap justify-start items-center">
        {/* Filter Section */}
        <input 
          className={`${themeMode ? 'bg-[#121212]' : 'bg-white'} w-[500px] p-4 text-lg border-gray-600 border-4 hover:opacity-75 rounded-md min-h-[25px] h-[50px]`}
          onChange={(e) => setInput(e.target.value)} 
          type="text" 
          placeholder="Search for news..." 
        />
        <button onClick={handleSearch} className={`${themeMode ? 'bg-[#121212]' : 'bg-white'} border-gray-600 border-4 w-[150px] h-[50px] rounded-md hover:opacity-75 ml-4`}>
          Search
        </button>
      </div>


      {/* Result News */}
      <div className="flex justify-center flex-wrap mt-8">
        {loading ? (
          <Image 
            src={preLoaderSVG}
            alt="Loader"
            className="mt-[150px] min-w-[185px]"
          />
        ) : result ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.map((article: any, index: number) => (
              <div key={index} className="flex flex-row ">
                <img className="min-w-[100px] max-w[300px]" src={article.urlToImage} alt={`${article + index}`}/>
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
