import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOption from "../components/Products/SortOption";
import ProductGrid from "../components/Products/ProductGrid";

function CollectioPages() {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSideBarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchProduct = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          image: [{ url: "https://picsum.photos/500/500?random=3" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 100,
          image: [{ url: "https://picsum.photos/500/500?random=4" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 100,
          image: [{ url: "https://picsum.photos/500/500?random=5" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 100,
          image: [{ url: "https://picsum.photos/500/500?random=6" }],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 100,
          image: [{ url: "https://picsum.photos/500/500?random=7" }],
        },
      ];
      setProducts(fetchProduct);
    }, 1000);
  }, []);

  useEffect(() => {
    if (isSideBarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSideBarOpen]);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        className="border border-gray-300 px-4 py-2 m-4 w-max flex items-center gap-2 z-10"
      >
        <FaFilter />
        Filters
      </button>

      {/* Overlay */}
      {isSideBarOpen && (
        <div
          className="fixed inset-0  bg-opacity-30 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-90 bg-white z-50 transform transition-transform duration-300 overflow-y-auto ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 hover:text-black text-2xl"
          >
            &times;
          </button>
        </div>
        <FilterSidebar />
      </div>

      {/* Main Content */}
      <div className="p-4 flex-1 overflow-y-auto">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        <SortOption />
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default CollectioPages;




// import React, { useEffect, useRef, useState } from "react";
// import { FaFilter } from "react-icons/fa";
// import FilterSidebar from "../components/Products/FilterSidebar";
// import SortOption from "../components/Products/SortOption";
// import ProductGrid from "../components/Products/ProductGrid";

// function CollectioPages() {
//   const [products, setProducts] = useState([]);
//   const sidebarRef = useRef(null);
//   const [isSideBarOpen, setIsSideBarOpen] = useState(false);
//   const toggleSidebar = () => {
//     setIsSideBarOpen(!isSideBarOpen);
//   };
//   const handleClickOutside = (e) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//       setIsSideBarOpen(false);
//     }
//   };
//   useEffect(() => {
//     // add event listern for clicks
//     document.addEventListener("mousedown", handleClickOutside);
//     // clean event Listener
//     return()=>{
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
    
//   },[]);
//   useEffect(() => {
//     setTimeout(() => {
//       const fetchProduct = [
//         {
//           _id: 1,
//           name: "Product 1",
//           price: 100,
//           image: [{ url: "https://picsum.photos/500/500?random=3" }],
//         },
//         {
//           _id: 2,
//           name: "Product 2",
//           price: 100,
//           image: [{ url: "https://picsum.photos/500/500?random=4" }],
//         },
//         {
//           _id: 3,
//           name: "Product 3",
//           price: 100,
//           image: [{ url: "https://picsum.photos/500/500?random=5" }],
//         },
//         {
//           _id: 4,
//           name: "Product 4",
//           price: 100,
//           image: [{ url: "https://picsum.photos/500/500?random=6" }],
//         },
//         {
//           _id: 5,
//           name: "Product 5",
//           price: 100,
//           image: [{ url: "https://picsum.photos/500/500?random=7" }],
//         },
//       ];
//       setProducts(fetchProduct);
//     }, 1000);
//   }, []);
//   return (
//     <div className="flex flex-col lg:flex-row">
//       {/* mobile filter button  */}
//       <button
//         onClick={toggleSidebar}
//         className="lg:hidden border-amber-50 p-2 flex justify-center items-center cursor-pointer"
//       >
//         <FaFilter className="mr-2" />Filters
//       </button>
//       {/* filter sidebar  */}
//       <div
//         ref={sidebarRef}
//         className={${
//           isSideBarOpen ? "translate-x-0" : "-translate-x-full"
//         } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0}
//       >
//         <FilterSidebar />
//       </div>
//       <div className="flex-grow p-4">
//         <h2 className="text-2xl uppercase mb-4">All Collection</h2>
//         {/* sort option  */}
//         <SortOption />
//         {/* productgrid  */}
//         <ProductGrid products={products} />
//       </div>
//     </div>
//   );
// }