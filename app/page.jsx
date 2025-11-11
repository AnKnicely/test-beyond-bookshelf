import Image from 'next/image';
import CurrentReads from './components/CurrentReads.jsx';
import Calendar from './components/Calendar.jsx';

// The data for the static content can be defined here or imported
const recommendedBooks = [
    { src: "/spark.jpg", alt: "Spark" },
    { src: "/redrising.jpg", alt: "Red Rising" },
    { src: "/thedevils.jpg", alt: "The Devils" },
    { src: "/tod.jpg", alt: "Tower of Dawn" },
    { src: "/phantasma.jpg", alt: "Phantasma" },
    { src: "/hotwax.jpg", alt: "Hot Wax" },
    { src: "/hollowheathens.jpg", alt: "Hollow Heathens" },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 pb-12">
      
      {/* 1. Current Reads (Client Component) */}
      <CurrentReads /> 

      {/* 2. Main Content (Recommendations & Friend Activity) */}
      <div className="lg:col-span-6 space-y-6">
        
        {/* Recommendations Panel */}
        <section className="bg-card-background">
          <h2 className="text-2xl font-bold text-dark-text mb-6">Recommended for you</h2>
          <div className="Recommended-books grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3 bg-E5C09E">
            {recommendedBooks.map((book, index) => (
              <div key={index} className="book-card">
                <Image 
                    src={book.src} 
                    alt={book.alt} 
                    width={100} 
                    height={150} 
                    className="w-full h-auto object-cover shadow-xl rounded hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Friend Activity */}
        <section className="bg-card-background rounded-lg">
          <h2 className="text-xl font-bold mb-4"> Friend Activity</h2>
          <div className="friend-updates space-y-4">
            {/* Activity Item 1 */}
            <div className="update-item flex justify-between items-center p-3 bg-card-background/70 border border-dark-brown rounded-lg">
              <Image src="https://placehold.co/50x50/EB7F50/FFFFFF?text=M" alt="Mandie's Profile Picture" width={40} height={40} className="w-10 h-10 object-cover rounded-full shadow-md mr-4"/> 
              <div className="flex-grow flex flex-col justify-center p-2">
                <p className="text-sm">
                  <strong className="font-semibold">Mandie</strong> rated a book 
                  <span className="text-yellow-500 text-lg leading-none align-middle inline-block">★★★★★</span>
                </p>
                <p className="text-xs italic mt-0.5">"Tower of Dawn" by Sarah J. Maas</p>
                <p className="text-text-sm mt-2 p-2 border-l-2 border-primary-orange bg-[#FFF8F3] rounded-r shadow-inner text-dark-brown">
                  "Omg it had me crying"
                </p>
              </div>
              <Image src="/tod.jpg" alt="Tower of Dawn" width={48} height={80} className="w-12 h-20 object-cover rounded shadow" />
            </div>

            {/* Activity Item 2 */}
            <div className="update-item flex justify-between items-center p-3 bg-card-background/70 border border-dark-brown rounded-lg">
              <Image src="https://placehold.co/50x50/EB7F50/FFFFFF?text=M" alt="Matt's Profile Picture" width={40} height={40} className="w-10 h-10 object-cover rounded-full shadow-md mr-4"/> 
              <div className="flex-grow flex flex-col justify-center p-2">
                <p className="text-sm">
                  <strong className="font-semibold">Matt</strong> rated a book 
                  <span className="text-yellow-500 text-lg leading-none align-middle inline-block">★★★★</span>
                  <span className="text-dark-brown/30 text-lg leading-none align-middle inline-block">★</span>
                </p>
                <p className="text-xs italic mt-0.5">"Red Rising" by Pierce Brown</p>
                <p className="text-text-sm mt-2 p-2 border-l-2 border-primary-orange bg-[#FFF8F3] rounded-r shadow-inner text-dark-brown">
                  "A dystopian masterpiece. Darrow's journey is a must-read for any sci-fi fan."
                </p>
              </div>
              <Image src="/redrising.jpg" alt="Red Rising" width={48} height={80} className="w-12 h-20 object-cover rounded shadow" />
            </div>
          </div>
        </section>
      </div>

      {/* 3. Sidebar (Calendar, Challenge, Cat of the Day) */}
      <aside className="lg:col-span-3 space-y-6">
        
        {/* Calendar (Client Component) */}
        <Calendar />

        {/* Reading Challenge */}
        <section className="bg-sidebar-bg">
          <h2 className="text-xl font-bold mb-4">Reading Challenge (2025)</h2>
          <div className="Challenge-box flex items-center">
            <div className="mr-4">
              <svg className="w-12 h-12 text-primary-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.794 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.794 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.206 18 16.5 18s-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-primary-orange">38</p>
              <p className="text-dark-text/80">books completed of 50</p>
            </div>
          </div>
        </section> 
        
        {/* Cat of the Day */}
        <div className="cat-of-the-day-card bg-sidebar-bg">
          <h3 className="font-bold text-xl mb-3">Cat of the Day</h3>
          <Image 
            src="/karly-jones-tsdop0ikzs8-unsplash.jpg" 
            alt="Black Cat in a Basket" 
            width={300} 
            height={400} 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

      </aside>
    </div>
  );
}