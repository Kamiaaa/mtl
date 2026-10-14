'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Icons matched with Navbar themes and links
import { 
  Home,
  Target,
  Zap,
  ImageIcon,
  FlaskConical,
  Mail
} from 'lucide-react';

const NavSticky = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        const scrollPercentage = (currentScroll / totalHeight) * 100;
        
        // Displays when scrolled past 50% of the page
        if (scrollPercentage >= 50) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to handle active route highlights for primary paths & dropdown child paths
  const isActive = (path: string, relatedPaths: string[] = []) => {
    if (pathname === path) return true;
    return relatedPaths.some((p) => pathname.startsWith(p));
  };

  return (
    <div 
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 bg-slate-950/90 backdrop-blur-md p-2 rounded-l-xl border-l border-y border-emerald-900/40 shadow-2xl transition-all duration-500 ease-in-out ${
        isVisible 
          ? 'translate-x-0 opacity-100 pointer-events-auto' 
          : 'translate-x-full opacity-0 pointer-events-none'
      }`}
    >
      
      {/* Home Link */}
      <Link
        href="/"
        className={`group flex items-center justify-center p-3 rounded-lg transition-all duration-200 hover:scale-110 ${
          isActive('/')
            ? 'bg-[#FECA26] text-slate-950 shadow-lg shadow-emerald-500/30'
            : 'text-gray-400 hover:text-[#FECC16] hover:bg-[#FECC16]/40'
        }`}
        title="Home"
      >
        <Home className="w-5 h-5" />
      </Link>

      {/* Company Link */}
      <Link
        href="/about"
        className={`group flex items-center justify-center p-3 rounded-lg transition-all duration-200 hover:scale-110 ${
          isActive('/about', ['/leadership', '/sustainability'])
            ? 'bg-[#FECA26] text-slate-950 shadow-lg shadow-[#FECC16]-500/30'
            : 'text-gray-400 hover:text-[#FECC16] hover:bg-[#FECC16]-950/40'
        }`}
        title="Company"
      >
        <Target className="w-5 h-5" />
      </Link>

      {/* Products & Solutions Link */}
      <Link
        href="/products/ev-batteries"
        className={`group flex items-center justify-center p-3 rounded-lg transition-all duration-200 hover:scale-110 ${
          isActive('/products', ['/products'])
            ? 'bg-[#FECA26] text-slate-950 shadow-lg shadow-[#FECC16]-500/30'
            : 'text-gray-400 hover:text-[#FECC16] hover:bg-[#FECC16]-950/40'
        }`}
        title="Products & Solutions"
      >
        <Zap className="w-5 h-5" />
      </Link>

      {/* Media Center Link */}
      <Link
        href="/gallery/photos"
        className={`group flex items-center justify-center p-3 rounded-lg transition-all duration-200 hover:scale-110 ${
          isActive('/gallery', ['/gallery'])
            ? 'bg-[#FECA26] text-slate-950 shadow-lg shadow-[#FECC16]-500/30'
            : 'text-gray-400 hover:text-[#FECC16] hover:bg-[#FECC16]-950/40'
        }`}
        title="Media Center"
      >
        <ImageIcon className="w-5 h-5" />
      </Link>

      {/* R&D Innovation Link */}
      <Link
        href="/innovation"
        className={`group flex items-center justify-center p-3 rounded-lg transition-all duration-200 hover:scale-110 ${
          isActive('/innovation')
            ? 'bg-[#FECA26] text-slate-950 shadow-lg shadow-[#FECC16]-500/30'
            : 'text-gray-400 hover:text-[#FECC16] hover:bg-[#FECC16]-950/40'
        }`}
        title="R&D Innovation"
      >
        <FlaskConical className="w-5 h-5" />
      </Link>

      {/* Contact Us Link */}
      <Link
        href="/contact"
        className={`group flex items-center justify-center p-3 rounded-lg transition-all duration-200 hover:scale-110 ${
          isActive('/contact')
            ? 'bg-[#FECA26] text-slate-950 shadow-lg shadow-[#FECC16]-500/30'
            : 'text-gray-400 hover:text-[#FECC16] hover:bg-[#FECC16]-950/40'
        }`}
        title="Contact Us"
      >
        <Mail className="w-5 h-5 group-hover:animate-pulse" />
      </Link>

    </div>
  );
};

export default NavSticky;