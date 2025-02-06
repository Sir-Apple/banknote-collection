import React, { useState } from 'react';
import { BanknoteCard } from './components/BanknoteCard';
import { banknotes } from './data/banknotes';
import { Coins, Search } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBanknotes = banknotes.filter(banknote =>
    banknote.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Coins className="w-10 h-10 text-emerald-600" />
            <h1 className="text-4xl font-bold text-gray-800">World Banknotes Collection</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore beautiful banknotes from around the world. Click on any banknote to see its reverse side.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white/80 backdrop-blur-sm
                focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                placeholder-gray-400 text-gray-900 text-lg
                transition-colors duration-200"
            />
          </div>
        </header>

        {filteredBanknotes.length === 0 ? (
          <div className="text-center text-gray-600 py-12">
            <p className="text-lg">No banknotes found for "{searchQuery}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBanknotes.map((banknote) => (
              <BanknoteCard key={banknote.id} banknote={banknote} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;