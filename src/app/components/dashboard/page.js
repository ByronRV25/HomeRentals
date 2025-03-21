'use client';
import { useState, useEffect } from 'react';
import { propertiesData } from '../../data/propertiesData';  //Information source
import Link from 'next/link'; 

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);

  
  useEffect(() => {
    setProperties(propertiesData);
  }, []);

  return (
    <div className="properties-container">
      <h1 className="text-center text-3xl font-bold mb-8 mt-12">Available Rental Properties</h1>
      <div className="properties-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <div key={property.id} className="property-card border rounded-lg shadow-md overflow-hidden">
          <Link href={`dashboard/details/${property.id}`}>
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{property.name}</h2>
              <p className="text-gray-500">{property.address}</p>
              <p className="text-gray-700 mt-2">{property.shortDescription}</p>
              <p className="text-xl font-bold text-blue-500 mt-2">{property.price}</p>
            </div>
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default PropertiesPage;

