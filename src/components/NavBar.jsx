import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">I Love Resume</div>
          <div>
            <a href="#features" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Features</a>
            <a href="#templates" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Templates</a>
            <a href="#testimonials" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
            <a href="#upload" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Upload</a>
            <a href="#contact" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
