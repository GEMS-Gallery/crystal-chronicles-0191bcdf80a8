import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gold hover:text-white transition-colors">
          Final Fantasy 14 Blog
        </Link>
        <nav>
          <Link to="/" className="text-gold hover:text-white transition-colors">Characters</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
