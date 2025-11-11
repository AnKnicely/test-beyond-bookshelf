'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', formData)
    // Add your authentication logic
  }

  return (
    <div className="min-h-screen flex flex-col pixel-bg">
      <Header />
      
      <main className="flex flex-grow justify-center items-center py-12">
        <div className="flex flex-col items-center w-full max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 drop-shadow-lg">Better Reads</h1>
          <div className="bg-primary-orange p-8 sm:p-10 w-full max-w-sm rounded-xl shadow-2xl text-center bg-opacity-30 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-3xl font-bold text-white mb-6">Login</h2>
              
              {/* Username Input */}
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
              
              {/* Password Input */}
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
              
              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center text-sm text-white pt-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="form-checkbox text-primary-orange rounded-sm focus:ring-0 bg-white border-gray-300" 
                  /> 
                  <span>Remember Me</span>
                </label>
                <Link href="/forgot-password" className="hover:underline text-white font-semibold">
                  Forgot Password
                </Link>
              </div>
              
              {/* Login Button */}
              <button 
                type="submit" 
                className="w-full py-3 mt-4 bg-white text-primary-orange font-bold rounded-full text-lg shadow-md hover:bg-gray-100 transition duration-200"
              >
                Login
              </button>
              
              {/* Sign Up Link */}
              <div className="register-link pt-4">
                <p className="text-white text-sm">
                  Don&apos;t have an account? 
                  <Link href="/signup" className="font-bold hover:underline ml-1">
                    Sign Up
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