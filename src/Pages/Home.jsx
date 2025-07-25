import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";


// const placeHolderProducts = [
// {
//   _id:1,
//   name:"Product 1",
//   price: 100,
//   images:[{url :"https://picsum.photos/500/500?random=3" }],
    
// },
// {
//   _id:2,
//   name:"Product 2",
//   price: 100,
//   images:[{url :"https://picsum.photos/500/500?random=4" }],
    
// },
// {
//   _id:3,
//   name:"Product 3",
//   price: 100,
//   images:[{url :"https://picsum.photos/500/500?random=5" }],
    
// },
// {
//   _id:4,
//   name:"Product 4",
//   price: 100,
//   images:[{url :"https://picsum.photos/500/500?random=6" }],
    
// },
// {
//   _id:1,
//   name:"Product 1",
//   price: 100,
//   images:[{url :"https://picsum.photos/500/500?random=7" }],
    
// },

// ]


function Home() {

  return <div className="">
    <Hero />
    <GenderCollectionSection />
    <NewArrivals />

    {/* bestseller */}
    <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
    <ProductDetails />
  </div>;
}

export default Home;
