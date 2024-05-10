import React from 'react';

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  // Add more image URLs as needed
];

const Images = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-32 h-32 rounded-full overflow-hidden border-4 border-white"
            style={{
              transform: `rotate(${index * (360 / images.length)}deg) translateY(-100px) rotate(-${index * (360 / images.length)}deg)`,
            }}
          >
            <img src={image} alt={`Image ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
