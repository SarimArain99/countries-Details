import React from "react";

function CountriesDetailShimmer() {
  return (
    <>
      <main className="cursor-default animate-pulse">
        <button
          className="flex items-center border-2 border-gray-300 rounded-lg mt-10 ml-10 mr-10 mb-4 w-24 h-13 bg-gray-300 shadow-md shadow-gray-500 animate-pulse"
          title="Click To Go Back"
        ></button>

        <div className="sm:flex items-center justify-center gap-3">
          <div className="m-2 mr-2 sm:w-80 w-72 sm:h-52 h-48 bg-gray-300 shadow-xl shadow-gray-500 mb-3" />

          <div className="ml-3 mt-6">
            <div className="h-8 w-60 bg-gray-300 mb-3"></div>
            <div className="h-5 w-40 bg-gray-300 mb-2"></div>
            <div className="h-5 w-52 bg-gray-300 mb-2"></div>
            <div className="h-5 w-36 bg-gray-300 mb-2"></div>
            <div className="h-5 w-44 bg-gray-300 mb-2"></div>
            <div className="h-5 w-48 bg-gray-300 mb-2"></div>
            <div className="h-5 w-56 bg-gray-300 mb-2"></div>
            <div className="h-5 w-32 bg-gray-300 mb-2"></div>
            <div className="h-5 w-64 bg-gray-300 mb-2"></div>
            <div className="h-5 w-44 bg-gray-300 mb-2"></div>
            <div className="h-5 w-20 bg-gray-300"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CountriesDetailShimmer;
