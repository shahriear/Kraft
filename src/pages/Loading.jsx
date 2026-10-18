import React from 'react';

const Loading = () => {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-5">
      {/* Loading Spinner */}
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>

      {/* Loading Text */}
      <h2 className="text-xl font-semibold text-gray-800">Loading...</h2>

      <p className="text-sm text-gray-500">
        Please wait while we fetch the data.
      </p>
    </section>
  );
};

export default Loading;
