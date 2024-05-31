import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturesSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="features" className="py-20 bg-black text-white">
      <div className="max-w-4xl  mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <Slider {...settings}>
          <div className=" bg-gray-600 p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p>Our platform is user-friendly and easy to navigate, making resume building a breeze.</p>
          </div>
          <div className="bg-gray-600 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-2">Customizable Templates</h3>
            <p>Choose from a variety of templates to suit your personal style and professional needs.</p>
          </div>
          <div className="bg-gray-600 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold mb-2">Professional Results</h3>
            <p>Create a polished, professional resume that stands out to employers.</p>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default FeaturesSection;
