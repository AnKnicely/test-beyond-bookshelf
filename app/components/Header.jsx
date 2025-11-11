'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-primary-orange shadow-lg sticky top-0 z-20">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16">
            <Image 
              src="/Cat_Logo.png" 
              alt="Cat Logo" 
              width={64} 
              height={64}
              className="w-full h-full object-contain" 
            />
          </div>
          <h1 className="text-2xl font-extrabold text-black">
            <Link href="/" className='hover:text-dark-brown transition duration-200'>BETTER READS</Link>
          </h1>
        </div>
        
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-6">
            <Link href="/login" className="nav-link">LOGIN</Link>
            <Link href="/profile" className="nav-link">PROFILE</Link>
            <Link href="/my-books" className="nav-link">MY BOOKS</Link>
            <Link href="/browse" className="nav-link">BROWSE</Link>
            
            {/* Dropdown Menu */}
            <div className="relative" onMouseLeave={() => setIsDropdownOpen(false)}>
              <button 
                className="Drop-Down-Menu-Icon-BTN"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={() => setIsDropdownOpen(p => !p)}
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                &#9776;
              </button>
              <div
                className={`absolute right-0 mt-3 w-40 bg-white border border-gray-200 rounded-lg shadow-xl origin-top-right transform transition duration-200 ease-out z-30 overflow-hidden ${isDropdownOpen ? 'block' : 'hidden'}`}
              >
                <Link href="/friends" className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-primary-orange transition duration-150 whitespace-nowrap">
                  Add Friends
                </Link>
                <a href="#" className="block px-4 py-2 text-red-600 hover:bg-red-50 transition duration-150 whitespace-nowrap">
                  Logout
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}