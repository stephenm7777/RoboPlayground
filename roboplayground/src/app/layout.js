'use client';

import { useState } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <html lang="en">
      <body className="flex min-h-screen font-sans">
        {/* Sidebar */}
        <aside className={`bg-gray-900 text-white p-4 transition-all duration-300 ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}>
          {isOpen && (
            <>
              <h1 className="text-xl font-bold mb-6 whitespace-nowrap">🤖 RoboPlayground</h1>
              <nav className="space-y-3">
                <a href="/" className="block hover:underline">🏠 Home</a>
                <a href="/simulator" className="block hover:underline">🧪 Simulator</a>
                <a href="/docs" className="block hover:underline">📚 Docs</a>
              </nav>
            </>
          )}
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto relative">
          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-4 left-4 z-10 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition"
          >
            {isOpen ? '← Hide Menu' : '☰ Show Menu'}
          </button>

          <div className="mt-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
