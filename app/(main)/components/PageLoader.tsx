// components/PageLoader.tsx
import React from 'react';
import Image from 'next/image';

interface PageLoaderProps {
  /** Optional message to display below the loader */
  message?: string;
  /** Fullscreen overlay or inline container */
  fullScreen?: boolean;
}

export default function PageLoader({ 
  message = "Loading Mango Teleservices...", 
  fullScreen = true 
}: PageLoaderProps) {
  const containerClasses = fullScreen 
    ? "fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md transition-opacity duration-300" 
    : "flex flex-col items-center justify-center p-12 w-full h-full min-h-[300px]";

  return (
    <div className={containerClasses} role="status" aria-label="Loading">
      {/* Outer Glow / Pulse Ring */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-28 h-28 rounded-full bg-amber-400/20 animate-ping" />
        
        {/* Rotating border ring matching brand yellow/orange */}
        <div className="absolute w-24 h-24 rounded-full border-4 border-amber-400 border-t-transparent animate-spin" />

        {/* Logo Container */}
        <div className="relative w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg overflow-hidden p-2">
          <Image
            src="/logo.png"
            alt="Mango Teleservices Logo"
            width={48}
            height={48}
            priority
            className="object-contain animate-pulse"
          />
        </div>
      </div>

      {/* Loading Text */}
      {message && (
        <p className="mt-6 text-sm font-medium text-slate-700 tracking-wide animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
}