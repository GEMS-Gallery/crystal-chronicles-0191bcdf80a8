import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Final Fantasy 14 Blog. All rights reserved.</p>
        <p className="mt-2">
          <a href="https://unsplash.com/photos/white-clouds-jtVFv8mDDBU" className="text-gold hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            Hero image by Unsplash
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
