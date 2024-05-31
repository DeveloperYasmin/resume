import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">"I Love Resume made it so easy to create a professional resume. I landed my dream job!"</p>
            <p className="text-gray-600">- Jane Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">"The customizable templates are fantastic. I highly recommend this platform!"</p>
            <p className="text-gray-600">- John Smith</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">"A great tool for job seekers. Easy to use and the results are amazing."</p>
            <p className="text-gray-600">- Emily Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
