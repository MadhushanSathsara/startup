import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 text-center">
      <p>© {new Date().getFullYear()} CODEMAP. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2 text-white">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
