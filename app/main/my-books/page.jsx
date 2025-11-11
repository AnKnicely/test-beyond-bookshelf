'use client'

import { useState } from 'react'
import MainLayout from '@/components/MainLayout'
import Link from 'next/link'

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState('')

  const clearSearch = () => {
    setSearchQuery('')
  }

  const lists = [
    { title: "Currently Reading", count: 2, href: "/currently-reading" },
    { title: "Finished", count: 2, href: "/finished" },
    { title: "Want to Read", count: 2, href: "/want-to-read" }
  ]

  return (
    <MainLayout>
      <div className="container mx-auto px-4 mt-8">
        {/* Search Form */}
        <form className="w-full max-w-2xl mx-auto mb-10">
          <div className="relative flex items-center">
            <i className="fa-solid fa-magnifying-glass pl-4 absolute"></i> 
            <input
              type="text"
              placeholder="Search Lists"
              aria-label="Search field"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
    
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear search"
                className="absolute right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={clearSearch}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            )}
          </div>
        </form>

        {/* Lists Grid */}
        <div className="space-y-8 pb-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* List Items */}
            {lists.map((list, index) => (
              <section key={index} className="bg-card">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <img
                    src="/76713323._SY180_.jpg"
                    alt="Empire of Storms by Sarah J. Maas"
                    className="w-24 h-auto"
                  />
                  <div className="md:w-2/3 mb-4 md:mb-0 md:pr-6">
                    <h2 className="text-2xl font-bold text-dark-text mb-2">{list.title}</h2>
                    <span className="text-sm font-medium text-gray-500 block mb-4">
                      <span className="text-gray-700 font-bold">{list.count} books</span> in this list
                    </span>
                  </div>
                </div>
              </section>
            ))}

            {/* Create New List */}
            <section className="bg-card">
              <h2 className="text-2xl font-bold text-dark-text mb-6">+ New List</h2>
              <div className="grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3">
                {/* Add new list content here */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}