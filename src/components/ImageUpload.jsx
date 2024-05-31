import React, { useState } from 'react';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <section id="upload" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Upload Your Resume Image</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {selectedImage && (
            <div className="mt-4">
              <img src={selectedImage} alt="Selected" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;
