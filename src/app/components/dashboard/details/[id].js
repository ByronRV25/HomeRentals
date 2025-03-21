'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { propertiesData } from '../../../data/propertiesData'; 

const PropertyDetailsPage = ({ params }) => {
  const [property, setProperty] = useState(null);
  const router = useRouter()

  useEffect(() => {
    if (router.query) {
      const foundProperty = propertiesData.find((property) => property.id.toString() === params.id);
      setProperty(foundProperty);
    }
  }, [params]);

  return (
    <div className="property-details-container p-4">
      <h1 className="text-center text-3xl font-bold mb-8">{property.name}</h1>
      
      <div className="property-details flex flex-col sm:flex-row gap-8">
        <div className="property-image w-full sm:w-1/2">
          <img src={property.image} alt={property.name} className="w-full h-auto object-cover" />
        </div>

        <div className="property-info w-full sm:w-1/2">
          <p className="text-lg font-semibold">Address: {property.address}</p>
          <p className="text-lg mt-4">{property.description}</p>
          <p className="text-xl font-bold text-blue-500 mt-4">Price: {property.price}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
