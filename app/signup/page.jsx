'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle signup logic here
    console.log('Signup attempt:', formData)
  }

  return (
    <div className="min-h-screen flex flex-col pixel-bg">
      <Header />
      
      <main className="flex flex-grow justify-center items-center py-12">
        <div className="flex flex-col items-center w-full max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 drop-shadow-lg">Better Reads</h1>
          <div className="bg-primary-orange p-8 sm:p-10 w-full max-w-sm rounded-xl shadow-2xl text-center bg-opacity-30 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-3xl font-bold text-white mb-6">Sign Up</h2>
              
              <div className="input-box">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-full bg-white bg-opacity-70 border border-gray-300 placeholder-gray-700 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none text-gray-800"
                />
              </div>
              
              <div className="input-box">
                <input 
                  type="text" 
                  name="username"
                  placeholder="Username" 
                  required 
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-3 rounded-full bg-white bg-opacity-70 border border-gray-300 placeholder-gray-700 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none text-gray-800"
                />
              </div>
              
              <div className="input-box">
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password" 
                  required 
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 rounded-full bg-white bg-opacity-70 border border-gray-300 placeholder-gray-700 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none text-gray-800"
                />
              </div>
              
              <div className="input-box">
                <input 
                  type="password" 
                  name="confirmPassword"
                  placeholder="Confirm Password" 
                  required 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 rounded-full bg-white bg-opacity-70 border border-gray-300 placeholder-gray-700 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none text-gray-800"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 mt-4 bg-white text-primary-orange font-bold rounded-full text-lg shadow-md hover:bg-gray-100 transition duration-200"
              >
                Sign Up
              </button>
              
              <div className="register-link pt-4">
                <p className="text-white text-sm">
                  Already have an account? 
                  <Link href="/login" className="font-bold hover:underline ml-1">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}