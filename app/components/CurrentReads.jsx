'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProgressModal from './ProgressModal';

const initialBooks = [
  { id: 1, title: "Empire of Storms", author: "Sarah J. Maas", cover: "76713323._SY180_.jpg", progress: 25 },
  { id: 2, title: "For Whom the Belle Tolls", author: "Jaysea Lynn", cover: "222946916._SY180_.jpg", progress: 57.6 },
];

export default function CurrentReads() {
  const [books, setBooks] = useState(initialBooks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeBook, setActiveBook] = useState(null);

  const openModal = (book) => {
    setActiveBook(book);
    setIsModalOpen(true);
  };

  const updateProgress = (bookId, newPercentage) => {
    setBooks(prevBooks => 
      prevBooks.map(book => 
        book.id === bookId ? { ...book, progress: newPercentage } : book
      )
    );
  };

  return (
    <section className="lg:col-span-3 space-y-6 bg-sidebar-bg rounded-lg">
      <h2 className="text-2xl font-bold text-dark-text mb-4">Current Reads</h2>

      {books.map((book) => (
        <div key={book.id} className="flex space-x-4 items-start bg-[#BAAF6F]/70 p-3 rounded-lg">
          <Image
            src={`/${book.cover}`}
            alt={`Cover of ${book.title} by ${book.author}`}
            width={64}
            height={96}
            className="w-16 h-24 object-cover shadow-md rounded"
          />
          <div className="flex-grow">
            <p className="font-bold text-base leading-tight">{book.title}</p>
            <p className="text-sm text-dark-text/80">{book.author}</p>

            <div className="w-full h-2 bg-dark-brown/30 rounded-full mt-2 overflow-hidden relative">
              <div
                className="bg-primary-orange h-full rounded-full transition-all duration-500 ease-out flex items-center justify-center"
                style={{ width: `${book.progress}%` }}
              >
              </div>
            </div>

            <button
              onClick={() => openModal(book)}
              className="mt-3 bg-primary-orange text-white text-sm px-4 py-1 rounded-full shadow hover:bg-dark-brown transition duration-200"
            > 
              Update Progress
            </button>
          </div>
        </div>
      ))}

      <ProgressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activeBookId={activeBook?.id}
        initialPercentage={activeBook?.progress || 0}
        onUpdate={updateProgress}
      />
    </section>
  );
}