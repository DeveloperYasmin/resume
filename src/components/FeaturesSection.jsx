import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p>Our platform is user-friendly and easy to navigate, making resume building a breeze.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-2">Customizable Templates</h3>
            <p>Choose from a variety of templates to suit your personal style and professional needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold mb-2">Professional Results</h3>
            <p>Create a polished, professional resume that stands out to employers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
