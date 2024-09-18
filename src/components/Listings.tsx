import React, { useEffect, useState } from 'react';
import Listing from './Listing';

interface ListingsProps {
  data: string[];
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

function Listings({ data, setLoaded }: ListingsProps) {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    if (imagesLoaded === data.length && data.length > 0) {
      setLoaded(true);
    }
  }, [imagesLoaded, data.length, setLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (
    <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 min-h-screen mt-8 lg:mt-20 p-2 md:p-6 border-2'>
      {data.map((element, index) => (
        <Listing
          data={element}
          key={index}
          onImageLoad={handleImageLoad}
        />
      ))}
    </div>
  );
}

export default Listings;
