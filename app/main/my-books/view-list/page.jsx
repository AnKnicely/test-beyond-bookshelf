'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FinishedPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const clearSearch = () => {
    setSearchQuery('')
  }

  const books = [
    {
      id: 1,
      title: "Iron Flame",
      author: "Kaylie Smith",
      cover: "/phantasma.jpg",
      rating: 3.5,
      stars: 3.5
    },
    {
      id: 2,
      title: "Red Rising",
      author: "Pierce Brown",
      cover: "/redrising.jpg",
      rating: 2,
      stars: 2
    },
    {
      id: 3,
      title: "Spark",
      author: "Penn Cole",
      cover: "/spark.jpg",
      rating: 5,
      stars: 5
    }
  ]

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fa-solid fa-star text-yellow-500"></i>)
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fa-solid fa-star-half-stroke text-yellow-500"></i>)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="fa-regular fa-star text-yellow-500"></i>)
    }

    return stars
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 mt-8 pb-20">
        <section className="bg-card-background p-6 md:p-8 rounded-xl shadow-2xl">
          {/* Header with Back Button */}
          <div className="flex items-center justify-center mb-6 relative">
            <Link 
              href="/my-books" 
              className="absolute left-0 text-xl text-dark-brown hover:text-primary-orange transition-colors"
            >
              <i className="fa-solid fa-angle-left"></i>
            </Link>
            <h2 className="text-3xl font-extrabold text-dark-brown tracking-wide">Finished</h2>
          </div>

          {/* Search Form */}
          <form className="w-full max-w-xl mx-auto mb-10">
            <div className="relative flex items-center">
              <i className="fa-solid fa-magnifying-glass pl-4 absolute text-gray-500"></i> 
              <input
                type="text"
                placeholder="Search This List"
                aria-label="Search field for Finished list"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-gray-400 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear search"
                  className="absolute right-3 text-gray-500 hover:text-dark-brown focus:outline-none transition"
                  onClick={clearSearch}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              )}
            </div>
          </form>

          {/* Book List */}
          <div className="space-y-4">
            {books.map((book) => (
              <div 
                key={book.id}
                className="flex items-start p-4 border-b border-gray-400 hover:bg-card-background/70 transition-colors cursor-pointer"
              >
                <img 
                  src={book.cover} 
                  alt={`${book.title} Cover`} 
                  className="w-16 h-24 object-cover shadow-lg rounded-md mr-4 flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-dark-brown leading-tight mb-1">{book.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{book.author}</p>
                  <div className="flex space-x-0.5 text-lg">
                    {renderStars(book.stars)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      <button 
        className="fixed bottom-12 right-6 w-16 h-16 bg-primary-orange rounded-full text-white text-4xl flex items-center justify-center shadow-2xl hover:bg-primary-orange/90 active:scale-95 transition-all duration-200 border-4 border-dark-brown z-10"
        title="Add new book to list"
        onClick={() => {
          // Add your FAB click handler here
          console.log('Add book button clicked')
        }}
      >
        <i className="fa-solid fa-plus font-bold"></i>
      </button>

      <Footer />
    </div>
  )
}