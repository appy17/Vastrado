import React from "react";
import { RiDeleteBin3Fill, RiDeleteBin3Line } from "react-icons/ri";

function CartContent() {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      price: 15,
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Yellow",
      price: 25,
      quantity: 1,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Top",
      size: "S",
      color: "Blue",
      price: 20,
      quantity: 1,
      image: "https://picsum.photos/200?random=3",
    },
  ];

  return (
    <div>
      {cartProducts.map((product) => (
        <div
          key={product.productId}
          className="flex items-center justify-between py-4 border-b border-gray-300"
        >
          <div className="flex items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium ">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium ">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>${product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartContent;
