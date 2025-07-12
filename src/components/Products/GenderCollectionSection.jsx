import React from "react";
import womensCollection from "../../assets/womens-collection.webp";
import mensCollection from "../../assets/mens-collection.webp"
import { Link } from "react-router-dom";

function GenderCollectionSection() {
  return (
    <section className="py-16 px-4 lg:px-0 ">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* women collection */}
        <div className="relative flex-1">
          <img
            src={womensCollection}
            className="w-full h-[700px] object-cover "
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collection/all?gender=women"
              className="text-gray-900 underline "
            ></Link>
            Shop Now
          </div>
        </div>

        {/* women collection */}
        <div className="relative flex-1">
          <img
            src={mensCollection}
            className="w-full h-[700px] object-cover "
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collection/all?gender=men"
              className="text-gray-900 underline "
            ></Link>
            Shop Now
          </div>
        </div>
      </div>
    </section>
  );
}

export default GenderCollectionSection;
