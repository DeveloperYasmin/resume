import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-4xl  mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <Slider {...settings}>
          <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">"I Love Resume made it so easy to create a professional resume. I landed my dream job!"</p>
            <p className="text-white dark:text-gray-300">- Jane Doe</p>
          </div>
          <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">"The customizable templates are fantastic. I highly recommend this platform!"</p>
            <p className="text-white dark:text-gray-300">- John Smith</p>
          </div>
          <div className=" bg-gray-600 p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">"A great tool for job seekers. Easy to use and the results are amazing."</p>
            <p className="text-white dark:text-gray-300">- Emily Johnson</p>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
