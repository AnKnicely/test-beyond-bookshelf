'use client'; 


import Image from 'next/image';
import Link from 'next/link';


// --- Data for Friends Cards ---
const friendsData = [
    {
        name: "Mandie",
        initial: "M",
        bio: "Historical fiction specialist. Always looking for new recommendations.",
        mutualFriends: 5,
        mutualBooks: 3,
        status: "Send Request",
    },
    {
        name: "Alicia",
        initial: "A",
        bio: "Emotionally attached to fantasy worlds and fictional characters. Prefer to spend my time either reading words on paper or screaming about said words on paper.",
        mutualFriends: 1,
        mutualBooks: 3,
        status: "Send Request",
    },
    {
        name: "Steven",
        initial: "S",
        bio: "• favorite genres; romance, fantasy/fiction. • favorite tropes; enemies to lovers, second chance. • favorite authors; Richelle Mead, Kate Stewart, Sarah J Maas, many more. 💜",
        mutualFriends: 1,
        mutualBooks: 3,
        status: "Send Request",
    },
];

// --- Friend Card Component ---
function FriendCard({ name, initial, bio, mutualFriends, mutualBooks, status }) {
    // Note: Placeholder image URL is used; in a real app, this would be a user avatar.
    const avatarUrl = `https://placehold.co/50x50/EB7F50/FFFFFF?text=${initial}`;
    
    // Convert bullet points in bio to simple paragraphs for better spacing in React
    const bioParagraphs = bio.split('•').filter(p => p.trim() !== '').map((p, index) => (
        <p key={index} className="text-gray-700 leading-snug">{p.trim()}</p>
    ));

    return (
        <section className="friend-card bg-card-background p-4 rounded-lg flex flex-col hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                    <Image 
                        src={avatarUrl} 
                        alt={name} 
                        width={64} 
                        height={64} 
                        className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                        <h2 className="text-xl font-bold text-dark-text">{name}</h2>
                    </div>
                </div>
                
                <div className="flex-grow mb-4 space-y-2">
                    {bioParagraphs.length > 0 ? bioParagraphs : <p className="text-gray-700">{bio}</p>}
                    
                    <div className="flex mt-3 text-sm text-gray-600 space-x-4">
                        <span><i className="fas fa-user-friends mr-1"></i> {mutualFriends} mutual friends</span>
                        <span><i className="fas fa-book mr-1"></i> {mutualBooks} mutual books</span>
                    </div>
                </div>
                
                <div className="mt-auto pt-4">
                    <button className="w-full bg-dark-brown hover:opacity-90 text-white px-4 py-2 rounded-lg transition-opacity duration-200">
                        {status}
                    </button>
                </div>
            </div>
        </section>
    );
}

// --- Main Page Component ---
export default function FriendsPage() {

    const clearSearch = () => {
        const input = document.getElementById('search-friends-input');
        if (input) {
            input.value = '';
            input.focus();
        }
    };

    return (
        <div className="container mx-auto px-4 mt-8">
            <h1 className="text-3xl font-bold text-center mb-2 text-dark-text">Search Friends</h1>
            <p className="text-center text-gray-600 mb-8">Find and connect with fellow book lovers</p>
            
            {/* Search Form */}
            <form className="w-full max-w-2xl mx-auto mb-10">
                <div className="relative flex items-center">
                    <i className="fa-solid fa-magnifying-glass pl-4 absolute text-gray-500"></i> 
                    <input
                        id="search-friends-input"
                        type="text"
                        placeholder="Search for Friends"
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

            {/* Friends Grid */}
            <div className="pb-12">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {friendsData.map((friend, index) => (
                        <FriendCard key={index} {...friend} />
                    ))}
                </div>
            </div>
        </div>
    );
}