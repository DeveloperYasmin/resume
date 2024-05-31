
  //  "url('https://media.licdn.com/dms/image/C4D12AQEpsPPyXhYpxQ/article-cover_image-shrink_600_2000/0/1624635496421?e=2147483647&v=beta&t=dc-tmuLWmqkMc0kB2y6d9Zt8LRMDOSSycrRUIe84yrQ')" }}>
  //   <h1 className="text-5xl bg-gradient-to-r from-purple-300  to-teal-300 bg-clip-text text-transparent  font-bold mb-4">Create Your Perfect Resume</h1>
  
  import React from 'react';
  import 'tailwindcss/tailwind.css';
  
  const HeroSection = () => {
    return (
      <header className="relative bg-cover bg-center" style={{ backgroundImage: "url('https://media.licdn.com/dms/image/C4D12AQEpsPPyXhYpxQ/article-cover_image-shrink_600_2000/0/1624635496421?e=2147483647&v=beta&t=dc-tmuLWmqkMc0kB2y6d9Zt8LRMDOSSycrRUIe84yrQ')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center text-white">
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                <h1 className="text-5xl font-bold mb-4">Create Your Perfect Resume</h1>
              </div>
              <div className="back">
                <h1 className="text-5xl font-bold mb-4">With I 💖 Resume</h1>
              </div>
            </div>
          </div>
          <p className="text-xl mt-16 mb-6">Building your resume is easy and fun. Stand out from the crowd.</p>
          <a href="#features" className="bg-slate-900 text-blue-300 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-200">Get Started</a>
        </div>
      </header>
    );
  }
  
  export default HeroSection;
  
