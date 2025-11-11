import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Banner */}
      <section className="relative mb-8 shadow-xl">
        <img 
          src="/ross-tejada-studying-cat-banner.jpg" 
          alt="Pixel Art Cat Reading" 
          className="w-full max-h-80 h-full object-cover"
          loading="eager" 
        />
      </section>

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}