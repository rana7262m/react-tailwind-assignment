import React from 'react';

const Home = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="p-4 border rounded-lg shadow hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Card {i + 1}</h2>
          <p className="text-gray-600">This is a sample card.</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
