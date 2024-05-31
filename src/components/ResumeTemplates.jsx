import React from 'react';

const ResumeTemplates = () => {
  return (
    <section id="templates" className="bg-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Resume Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="template1.jpg" alt="Template 1" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern Template</h3>
            <p>A sleek and modern template to showcase your skills and experience.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="template2.jpg" alt="Template 2" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Classic Template</h3>
            <p>A classic template with a clean and professional look.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="template3.jpg" alt="Template 3" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Creative Template</h3>
            <p>A creative template with unique design elements to make your resume stand out.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeTemplates;
