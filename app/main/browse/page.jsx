'use client'; 
// Using 'use client' because of the onClick on the clear button

import Image from 'next/image';
import Link from 'next/link';

// Dummy data for the book lists
const bookLists = [
    { title: "Currently Reading", count: 2, cover: "76713323._SY180_.jpg", link: "/my-books" },
    { title: "Finished", count: 18, cover: "redrising.jpg", link: "view-lists.html" }, // Keep original link for now
    { title: "Want to Read", count: 10, cover: "spark.jpg", link: "#" },
];

// Helper component for the book list card
function BookListCard({ title, count, cover, link }) {
    // Determine the text color for the title based on the theme
    const titleColor = "text-dark-text"; 

    // Determine the content to wrap in a Link
    const content = (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <Image
                src={`/${cover}`}
                alt={`${title} list cover`}
                width={96} // Equivalent to w-24
                height={144} // Set a reasonable height for book covers
                className="w-24 h-auto object-cover rounded shadow-md mb-4 md:mb-0"
                priority={true} // Load key images faster
            />
            <div className="md:w-2/3 md:pl-6">
                <h2 className={`text-2xl font-bold ${titleColor} mb-2`}>{title}</h2>
                <span className="text-sm font-medium text-gray-700 block mb-4">
                    <strong className="font-bold">{count} books</strong> in this list
                </span>
            </div>
        </div>
    );

    // If a link is provided, wrap content in a Link component
    if (link && link !== "#") {
        return (
            <section className="bg-card-background hover:shadow-xl transition duration-300">
                <Link href={link}>
                    {content}
                </Link>
            </section>
        );
    }
    
    // For non-linked or placeholder sections (like "New List")
    return (
        <section className="bg-card-background">
            {content}
        </section>
    );
}


export default function BrowsePage() {

    // Simple client-side logic for clearing the search field
    const clearSearch = () => {
        const input = document.getElementById('search-lists-input');
        if (input) {
            input.value = '';
            input.focus(); // Optional: put focus back on the input
        }
    };

    return (
        <div className="container mx-auto px-4 mt-8">

            {/* Search Form */}
            <form className="w-full max-w-2xl mx-auto mb-10">
                <div className="relative flex items-center">
                    <i className="fa-solid fa-magnifying-glass pl-4 absolute text-gray-500"></i> 
                    <input
                        id="search-lists-input"
                        type="text"
                        placeholder="Search Lists"
                        aria-label="Search field"
                        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-primary-orange"
                    />
        
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
                </div>
            </form>

            {/* Book Lists Grid */}
            <div className="space-y-8 pb-12">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    {/* Render dynamic lists */}
                    {bookLists.map((list, index) => (
                        <BookListCard key={index} {...list} />
                    ))}
                    
                    {/* Create New List Card */}
                    <section className="bg-card-background flex flex-col justify-center items-center h-full min-h-[140px] border-2 border-dashed border-dark-brown/50 hover:border-dark-brown transition duration-200 cursor-pointer">
                        <h2 className="text-3xl font-bold text-dark-text/80 mb-2"> + New List</h2>
                        <p className="text-sm text-gray-600">Click to create a personalized reading list</p>
                    </section>
                </div>
            </div>
        </div>
    );
}