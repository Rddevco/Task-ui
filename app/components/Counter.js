"use client"; // Required for Next.js App Router

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-600 mb-5">Counter: {count}</h2>
      <div className="flex space-x-4">
        <button 
          onClick={() => setCount(count + 1)} 
          className="px-5 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          INCREMENT
        </button>
        <button 
          onClick={() => setCount(count - 1)} 
          className="px-5 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        >
          DECREMENT
        </button>
      </div>
    </div>
  );
}
