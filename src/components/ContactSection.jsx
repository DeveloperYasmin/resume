import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-blue-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">Have questions? Feel free to reach out to us at <a href="mailto:support@iloveresume.com" className="underline">support@iloveresume.com</a>.</p>
        <p>&copy; 2024 I Love Resume. All rights reserved.</p>
      </div>
    </section>
  );
}

export default ContactSection;
