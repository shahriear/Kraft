import React from 'react'
import { Home, ArrowLeft, Search, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageNotFound = onGoHome => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Decorative Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-xl w-full text-center relative z-10 space-y-8">
        {/* Animated 404 Large Number */}
        <div className="relative inline-block select-none">
          <h1 className="text-9xl md:text-[180px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-400 to-neutral-800 leading-none">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm md:text-base font-mono uppercase tracking-[0.3em] bg-neutral-900/90 text-neutral-300 border border-neutral-800 px-4 py-1.5 rounded-full shadow-2xl backdrop-blur-md">
            Page Not Found
          </div>
        </div>

        {/* Message Subtitle */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-100">
            Oops! Look like you're lost.
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Quick Search Bar Suggestion */}
        <div className="max-w-sm mx-auto relative">
          <input
            type="text"
            placeholder="Search for pages, projects..."
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg pl-10 pr-4 py-3 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all"
          />
          <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-neutral-800 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-300 hover:bg-neutral-900 hover:text-white transition-all duration-300 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>

          <Link
            to="/"
            onClick={onGoHome || (() => (window.location.href = '/'))}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 group cursor-pointer shadow-lg shadow-white/5"
          >
            <Home className="w-4 h-4 mr-2" />
            Back To Home
          </Link>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-neutral-600 font-mono pt-8">
          Error Code: 404_PAGE_NOT_FOUND
        </p>
      </div>
    </div>
  );
};

export default PageNotFound