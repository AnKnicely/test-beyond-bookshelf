import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-white py-4 mt-auto">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="footer-links space-x-4 mb-2 sm:mb-0">
          <Link href="/about" className="hover:text-primary-orange transition">About the Company</Link>
          <Link href="/contact" className="hover:text-primary-orange transition">Contact Us</Link>
        </div>
        <p className="copyright">&copy; Copyright 2025 | Better Reads</p>
      </div>
    </footer>
  );
}