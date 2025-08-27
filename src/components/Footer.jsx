import React from 'react'

const Footer = () => {

  return (
    <footer className="bg-gray-800 text-gray-300 py-6 text-center">
      <p>© {new Date().getFullYear()} CODEMAP. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2 text-white">
        <a href="#" className="hover:text-white">Facebook</a>
        <a href="#" className="hover:text-white">Twitter</a>
        <a href="#" className="hover:text-white">Instagram</a>
      </div>
    </footer>
  );
};


export default Footer
