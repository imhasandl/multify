'use client'

import { useState } from "react"

import preLoaderSVG from '@/public/bouncing-circles.svg'
import Image from "next/image"

export default function extraNewsSection({ themeMode }: any) {
  const [input, setInput] = useState<string>('')
  const [result, setResult] = useState<any[]>([])
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
        // Filters
      const filteredNews = data.articles
        .filter((article: any) => article.urlToImage !== null)
        .filter((article: any) => article.author !== null)
        .filter((article: any) => article.description !== null)
        .filter((article: any) => article.title !== null)
        .filter((article: any) => article.content !== null)
        .filter((article: any) => article.publishedAt !== null);

      setResult(filteredNews)
      setLoading(false)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="flex flex-col relative flex-wrap m-2 md:mx-8 ">
      <div className="flex flex-row flex-wrap items-center">
        {/* Filter Section */}
        <input 
          className={`${themeMode ? 'bg-[#121212]' : 'bg-white'} min-w-[150px] max-w-[450px] p-4 text-lg border-gray-600 border-4 hover:opacity-75 focus:text-opacity-55 rounded-md min-h-[25px] h-[50px] mr-4`}
          onChange={(e) => setInput((e.target.value).toLowerCase())} 
          type="text" 
          placeholder="Search for news..." 
        />
        <button onClick={handleSearch} className={`${themeMode ? 'bg-[#121212]' : 'bg-white'} border-gray-600 border-4 w-[150px] h-[50px] rounded-md hover:opacity-75 sm:justify-end  `}>
          Search
        </button>
      </div>


      {/* Result News */}
      <div className="flex flex-col justify-center flex-wrap mt-8">
        {loading ? (
          <Image 
            src={preLoaderSVG}
            alt="Loader"
            className="mt-[150px] min-w-[185px]"
          />
        ) : result ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.map((article: any, index: number) => (
              <div key={index} className="flex flex-wrap w-full font-serif">
                <a href={article.url}>
                  <img className="aspect-[4/2] rounded-md hover:shadow-lg" src={article.urlToImage} alt={`${article + index}`}/>
                  <h1 className="font-bold">
                    {article.title} 
                    <span className="opacity-50 text-sm ml-2">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                  </h1>
                  <p className="">{article.description}</p>
                  <h3>{article.content}</h3>
                </a>
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
