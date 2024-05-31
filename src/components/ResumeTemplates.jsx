import React from 'react';

const ResumeTemplates = () => {
  return (
    <section id="templates" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Resume Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-600 p-4 rounded-lg shadow-lg">
            <img src="https://marketplace.canva.com/EAFfUETqcL8/2/0/1131w/canva-minimalist-cv-resume-4r6P24uiwQc.jpg" alt="Template 1" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern Template</h3>
            <p>A sleek and modern template to showcase your skills and experience.</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg shadow-lg">
            <img src="https://cdn-images.zety.com/templates/zety/primo-6-classic-silver-dark-248@3x.png" alt="Template 2" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Classic Template</h3>
            <p>A classic template with a clean and professional look.</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg shadow-lg">
            <img src="https://res-academy.cache.wpscdn.com/images/seo_posts/20220822/943b5ed20329705e124ef37f3ebb57bd.png" alt="Template 3" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Creative Template</h3>
            <p>A creative template with unique design elements to make your resume stand out.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeTemplates;
