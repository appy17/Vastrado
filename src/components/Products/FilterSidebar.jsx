import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function FilterSidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceRange, setPriceRange] = useState([0, 100]);
  const category = ["TOP WEAR", "BOTTOM WEAR"];
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Pink",
    "Black",
    "White",
    "Beige",
    "Navy",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const material = [
    "Cotton",
    "Wool",
    "Silk",
    "Rayon",
    "Linen",
    "Viscose",
    "Polyster",
  ];
    const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };


  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Lacoste"];
  const genders = ["Men", "Women"];
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);
  const handleFiltrerChnage = (e) => {
    const { name, value, checked, type } = e.target;
    console.log({ name, value, checked, type });
    let newFilter = { ...filters };
    if (type === "checkbox") {
      if (checked) {
        newFilter[name] = [...(newFilter[name] || []), value]; //["xs,s,m"]
      } else {
        newFilter[name] = newFilter[name].filter((item) => item !== value);
      }
    } else {
      newFilter[name] = value;
    }
    setFilters(newFilter);
    updateURLparams(newFilter);
    console.log(newFilter);
  };
  const updateURLparams = (newFilter) => {
  const params = new URLSearchParams();

  Object.keys(newFilter).forEach((key) => {
    if (Array.isArray(newFilter[key]) && newFilter[key].length > 0) {
      params.set(key, newFilter[key].join(","));
    } else if (newFilter[key]) {
      params.set(key, newFilter[key]);
    }
  });
  setSearchParams(params);
  navigate(`?${params.toString()}`);
};



const handlePriceChange =(e)=>{
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilter= {...filters,minPrice:0 ,maxPrice:newPrice};
    setFilters(filters);
    updateURLparams(newFilter);
  }
  
  return (
    <div className="p-7 ">
      <h3 className="text-2xl font-medium text-gray-800 mb-4 flex justify-between items-center">
        Filter
      
      </h3>

      {/* Accordion Section Template */}
      {/* CATEGORY */}
      <div className="mb-4 border-b border-gray-300 cursor-pointer">
        <button
          onClick={() => toggleSection("category")}
          className="w-full text-left text-lg text-black  py-2 flex justify-between items-center cursor-pointer"
        >
          Category
          <span>{openSection === "category" ? "▲" : "▼"}</span>
        </button>
        {openSection === "category" && (
          <div className="pl-2 pb-2 bg-gray-100 -tracking-tight">
            {category.map((cat) => (
              <div key={cat} className="flex items-center mb-1 py-2 ">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  onChange={handleFiltrerChnage}
                  checked={filters.category === cat}
                  className="mr-2"
                />
                <span>{cat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* GENDER */}
      <div className="mb-4 border-b border-gray-300">
        <button
          onClick={() => toggleSection("gender")}
          className="w-full text-left text-lg text-gray-700 font-semibold py-2 flex justify-between items-center"
        >
          Gender
          <span>{openSection === "gender" ? "▲" : "▼"}</span>
        </button>
        {openSection === "gender" && (
          <div className="pl-2 pb-2">
            {genders.map((gender) => (
              <div key={gender} className="flex items-center mb-1">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  onChange={handleFiltrerChnage}
                  checked={filters.gender === gender}
                  className="mr-2"
                />
                <span>{gender}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* COLOR */}
      <div className="mb-4 border-b border-gray-300">
        <button
          onClick={() => toggleSection("color")}
          className="w-full text-left text-lg text-gray-700 font-semibold py-2 flex justify-between items-center"
        >
          Color
          <span>{openSection === "color" ? "▲" : "▼"}</span>
        </button>
        {openSection === "color" && (
          <div className="pl-2 pb-2 flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                value={color}
                onClick={handleFiltrerChnage}
                type="button"
                name="color"
                className={`w-8 h-8 rounded-full  border border-gray-300 cursor-pointer transition hover:scale-105 ${
                  filters.color === color ? "ring-2 ring-blue-500" : ""
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
              ></button>
            ))}
          </div>
        )}
      </div>

      {/* SIZE */}
      <div className="mb-4 border-b border-gray-300" >
        <button
          onClick={() => toggleSection("size")}
          className="w-full text-left text-lg text-gray-700 font-semibold py-2 flex justify-between items-center"
        >
          Size
          <span>{openSection === "size" ? "▲" : "▼"}</span>
        </button>
        {openSection === "size" && (
          <div className="pl-2 pb-2">
            {sizes.map((size) => (
              <div key={size} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  name="size"
                  value={size}
                  onChange={handleFiltrerChnage}
                  checked={filters.size.includes(size)}
                  className="mr-2"
                />
                <span>{size}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MATERIAL */}
      <div className="mb-4 border-b border-gray-300">
        <button
          onClick={() => toggleSection("material")}
          className="w-full text-left text-lg text-gray-700 font-semibold py-2 flex justify-between items-center"
        >
          Material
          <span>{openSection === "material" ? "▲" : "▼"}</span>
        </button>
        {openSection === "material" && (
          <div className="pl-2 pb-2">
            {material.map((mat) => (
              <div key={mat} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  name="material"
                  value={mat}
                  onChange={handleFiltrerChnage}
                  checked={filters.material.includes(mat)}
                  className="mr-2"
                />
                <span>{mat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BRAND */}
      <div className="mb-4 border-b border-gray-300">
        <button
          onClick={() => toggleSection("brand")}
          className="w-full text-left text-lg text-gray-700 font-semibold py-2 flex justify-between items-center"
        >
          Brand
          <span>{openSection === "brand" ? "▲" : "▼"}</span>
        </button>
        {openSection === "brand" && (
          <div className="pl-2 pb-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  name="brand"
                  value={brand}
                  onChange={handleFiltrerChnage}
                  checked={filters.brand.includes(brand)}
                  className="mr-2"
                />
                <span>{brand}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* PRICE RANGE */}
      <div className="mb-4 border-b border-gray-300">
        <button
          onClick={() => toggleSection("price")}
          className="w-full text-left text-lg text-gray-700 font-semibold py-2 flex justify-between items-center"
        >
          Price Range
          <span>{openSection === "price" ? "▲" : "▼"}</span>
        </button>
        {openSection === "price" && (
          <div className="pl-2 pb-2">
            <input
              type="range"
              name="priceRange"
              value={priceRange[1]}
              min={0}
              max={100}
              onChange={handlePriceChange}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>$0</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterSidebar;



{/* <div className="p-7">
      <h3 className="text-2xl font-medium text-gray-800 mb-4 ">Filter</h3>
      {/* caterory filter  */}
      // <div className="mb-6">
      //   <label htmlFor="" className="block text-xl text-gray-600 font-medium mb-2">
      //     Category
      //   </label>
      //   {category.map((category) => (
      //     <div key={category} className="flex items-center mb-1">
      //       <input
      //         type="radio"
      //         name="category"
      //         value={category}
      //         onChange={handleFiltrerChnage}
      //         checked={filters.category===category}
      //         className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
      //       />
      //       <span className="text-gray-700">{category}</span>
      //     </div>
      //   ))}
      // </div>

      // {/* Gender filter  */}
      // <div className="mb-6">
      //   <label htmlFor="" className="block text-gray-600 font-medium mb-2">
      //     Gender
      //   </label>
      //   {genders.map((gender) => (
      //     <div key={gender} className="flex items-center mb-1">
      //       <input
      //         type="radio"
      //         name="gender"
      //         value={gender}
      //         onChange={handleFiltrerChnage}
      //         checked={filters.gender=== gender}
      //         className="mr-2  h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
      //       />
      //       <span className="text-gray-700">{gender}</span>
      //     </div>
      //   ))}
      // </div>
      // {/* color filter  */}
      // <div className="mb-6">
      //   <label htmlFor="" className="block  text-gray-600 font-medium mb-2 ">
      //     Color
      //   </label>
      //   <div className="flex flex-wrap gap-2">
      //     {colors.map((color) => (
      //       <button
      //         key={color}
      //         value={color}
      //         onClick={handleFiltrerChnage}
      //         type="button"
      //         name="color"
      //         className={w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filters.color === color ? "ring-2 ring-blue-500": ""}}
      //         style={{ backgroundColor: color.toLowerCase() }}
      //       ></button>
      //     ))}
      //   </div>
      // </div>
      {/* size filter  */}
    //   <div className="mb-6 ">
    //     <label htmlFor="" className="block text-gray-600 font-medium mb-2 ">
    //       Size
    //     </label>
    //     {sizes.map((size) => (
    //       <div key={size} className="flex items-center mb-1">
    //         <input
    //           type="checkbox"
    //           value={size}
    //           onChange={handleFiltrerChnage}
    //           checked={filters.size.includes(size) }
    //           name="size"
    //           className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300  "
    //         />
    //         <span className="text-gray-700">{size}</span>
    //       </div>
    //     ))}
    //   </div>

    //   {/* material filter  */}
    //   <div className="mb-6 ">
    //     <label htmlFor="" className="block text-gray-600 font-medium mb-2 ">
    //       Material
    //     </label>
    //     {material.map((material) => (
    //       <div key={material} className="flex items-center mb-1">
    //         <input
    //           type="checkbox"
    //           value={material}
    //           checked={filters.material.includes(material) }

    //           onChange={handleFiltrerChnage}
    //           name="material"
    //           className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300  "
    //         />
    //         <span className="text-gray-700">{material}</span>
    //       </div>
    //     ))}
    //   </div>

    //   {/* brand filter  */}
    //   <div className="mb-6 ">
    //     <label htmlFor="" className="block text-gray-600 font-medium mb-2 ">
    //       Brands
    //     </label>
    //     {brands.map((brand) => (
    //       <div key={brand} className="flex items-center mb-1">
    //         <input
    //           type="checkbox"
    //           value={brand}
    //           onChange={handleFiltrerChnage}
    //           name="brand"
    //           checked={filters.brand.includes(brand) }
    //           className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300  "
    //         />
    //         <span className="text-gray-700">{brand}</span>
    //       </div>
    //     ))}
    //   </div>

    //   {/* price range filter  */}
    //   <div className="mb-8 ">
    //     <label htmlFor="" className="block text-gray-600 font-medium mb-2 ">
    //       Price Range
    //     </label>

    //     <input
    //       type="range"
    //       value={priceRange[1]}
        
    //       onChange={handlePriceChange}
    //       name="priceRange"
    //       min={0}
    //       max={100}
    //       className="mw-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer "
    //     />
    //     <div className="flex justify-between text-gray-600 mt-2">
    //       <span>$0</span>
    //       <span>${priceRange[1]}</span>
    //     </div>
    //   </div>
    // </div>
    // </div> 