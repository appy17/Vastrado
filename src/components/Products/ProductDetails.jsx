import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

function ProductDetails() {
  const selectedproduct = {
    name: "Stylish jacket",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish jacket perfect for any occasion",
    brand: "FashionBrand",
    material: "Leather",
    size: ["XS", "S", "M", "L"],
    colors: ["Red", "Blue", "Black"],
    image: [
      {
        url: "https://picsum.photos/500/500?random=1",
        alt: "product image",
      },
      {
        url: "https://picsum.photos/500/500?random=2",
        alt: "product image",
      },
      {
        url: "https://picsum.photos/500/500?random=3",
        alt: "product image",
      },
    ],
  };
  const Similarproducts=[
    {
_id:1,
name:"Product 1",
price:100,
image:[
  {url :"https://picsum.photos/500/500?random=3"}]
  },
  {
    _id:2,
    name:"Product 2",
    price:80,
    image:[{
      url :"https://picsum.photos/500/500?random=5"}]
    },
     {
    _id:3,
    name:"Product 3",
    price:80,
    image:[{
      url :"https://picsum.photos/500/500?random=6"}]
    },
  {
    _id:4,
    name:"Product 4",
    price:80,
    image:[{
      url :"https://picsum.photos/500/500?random=7"}]
    },
    
]

  const [mainImage, setMainImage] = useState("");
  const [selectSize, setSelectSize] = useState("");
  const [selectColor, setSelectcolor] = useState("");
  const [quntity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisable] = useState(false);

  useEffect(() => {
    if (selectedproduct?.image?.length > 0) {
      setMainImage(selectedproduct.image[0].url);
    }
  }, []);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quntity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddtoCart = () => {
    if (!selectSize || !selectColor) {
      toast.error("please select a size and color before adding to cart.", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisable(true);
    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 1000,
      });
      setIsButtonDisable(false);
    },2000);
  };
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row ">
          {/* left Tumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedproduct.image.map((img, index) => (
              <img
                src={img.url}
                alt={img.alt}
                key={index}
                onClick={() => setMainImage(img.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === img.url ? "border-black" : "border-gray-300"
                }  `}
              />
            ))}
          </div>
          {/* Main Image  */}
          <div className="md:w-1/2 ">
            <div className="mb-4 ">
              <img
                src={mainImage}
                alt="Main product "
                className="w-full h-auto object-cover rounded-lg "
              />
            </div>
          </div>
          {/* Mobile Thumbnail  */}
          <div className="flex md:hidden  overscroll-x-scroll  space-x-4 mb-4">
            {selectedproduct.image.map((img, index) => (
              <img
                src={img.url}
                alt={img.alt}
                key={index}
                onClick={() => setMainImage(img.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === img.url ? "border-black" : "border-gray-300"
                } `}
              />
            ))}
          </div>
          {/* Right Side  */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2"></h1>
            {selectedproduct.name}
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedproduct.originalPrice &&
                `${selectedproduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              {selectedproduct.price && `${selectedproduct.price}`}
            </p>
            <p className="text-gray-600 mb-4 ">{selectedproduct.description}</p>
            <div className="mb-4 ">
              <p className="text-gray-700 ">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedproduct.colors.map((colors) => (
                  <button
                    className={`w-8 h-8 rounded-full border ${
                      selectColor === colors
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectcolor(colors)}
                    key={colors}
                    style={{
                      backgroundColor: colors.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 ">
                Size:
                <div className="flex gap-2 mt-2 ">
                  {selectedproduct.size.map((sizes) => (
                    <button
                      key={sizes}
                      className={`px-4 py-2 rounded border ${
                        selectSize === sizes ? " bg-black text-white " : ""
                      }`}
                      onClick={() => setSelectSize(sizes)}
                    >
                      {sizes}
                    </button>
                  ))}
                </div>
              </p>
            </div>

            <div className="mb-6 ">
              <p className="text-gray-700 ">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-1 rounded border text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quntity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-1 rounded border text-lg"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddtoCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled? "cursor-not-allowed opacity-50 ":"hover:bg-gray-900" }`}
            >
              {isButtonDisabled ? "Adding...": "ADD TO CART" }
            </button>
            <div className="mt-10 text-gray-700 ">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600 ">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1 ">{selectedproduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1 ">{selectedproduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">You May Also like</h2>
          <ProductGrid products={Similarproducts} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
