'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle password reset logic here
    console.log('Password reset for:', email)
  }

  return (
    <div className="min-h-screen flex flex-col pixel-bg">
      <Header />
      
      <main className="flex flex-grow justify-center items-center py-12">
        <div className="flex flex-col items-center w-full max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 drop-shadow-lg">Better Reads</h1>
          <div className="bg-primary-orange p-8 sm:p-10 w-full max-w-sm rounded-xl shadow-2xl text-center bg-opacity-30 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-3xl font-bold text-white mb-6">Reset Password</h2>
              
              <p className="text-white text-sm mb-4">
                Enter your email address and we&apos;ll send you a link to reset your password.
              </p>
              
              <div className="input-box">
                <input 
                  type="email" 
                  placeholder="Email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-full bg-white bg-opacity-70 border border-gray-300 placeholder-gray-700 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none text-gray-800"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 mt-4 bg-white text-primary-orange font-bold rounded-full text-lg shadow-md hover:bg-gray-100 transition duration-200"
              >
                Send Reset Link
              </button>
              
              <div className="register-link pt-4">
                <p className="text-white text-sm">
                  <Link href="/login" className="font-bold hover:underline">
                    Back to Login
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