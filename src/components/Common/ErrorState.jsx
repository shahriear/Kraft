import { AlertCircle, Home } from 'lucide-react';
import React from 'react'

const ErrorState = ({
  title = 'Something went wrong',
  message = 'An unexpected error occurred while processing your request. Please try again.',
  onRetry,
  onGoHome,
}) => {
  return (
    <div className="min-h-screen w-full bg-neutral-50/50 border border-neutral-200/80 rounded-2xl p-8 flex flex-col items-center justify-center text-center my-6">
      {/* Icon Container with subtle pulse gradient */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 shadow-sm">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div className="absolute inset-0 bg-red-400/10 rounded-2xl blur-lg -z-10" />
      </div>

      {/* Text Content */}
      <div className="max-w-md space-y-2 mb-8">
        <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed">{message}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        {onRetry && (
          <button
            onClick={onRetry}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 active:scale-95 transition-all shadow-sm cursor-pointer group"
          >
            <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </button>
        )}

        <button
          onClick={onGoHome || (() => (window.location.href = '/'))}
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white border border-neutral-200 text-neutral-700 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 hover:text-black active:scale-95 transition-all cursor-pointer"
        >
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorState