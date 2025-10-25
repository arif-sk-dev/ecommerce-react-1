import React, { useEffect, useState } from "react";
import { getData } from "./../../context/DataContext";
import FilterSection from "../../components/FilterSection";
import Loading from "../../../src/assets/Loading.gif";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";
import MobileFilter from "../../components/MobileFilter";

const Shop = () => {
  const { data, fetchAllProducts } = getData();

  // For Filter Component
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1); //pagination
  const [openFilter, setOpenFilter] = useState(false); //toggler

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  //pagination
  const pageHandler = (selectPage) => {
    setPage(selectPage);
  };

  // handle search, filter & price
  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );
  const dynamicPage = Math.ceil(filteredData?.length / 8); // for Pagination

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 pb-10 mt-20">
        {/* Breadcrumb Navigation start */}
        <div className="pt-5 mb-5">
          <nav className="text-sm text-zinc-500">
            <ol className="list-reset flex flex-wrap items-center gap-1">
              <li>
                <Link to="/" className="hover:text-black font-medium">
                  Home
                </Link>
                <span className="mx-1">/</span>
              </li>
              <li className="text-zinc-700 font-semibold truncate max-w-[80vw]">
                Shop
              </li>
            </ol>
          </nav>
        </div>
        {/* Breadcrumb Navigation end */}

        <MobileFilter setOpenFilter={setOpenFilter} />
        {data?.length > 0 ? (
          <div className="flex gap-8 md:flex-row lg:flex-row flex-col">
            {/* Filter Section  */}
            <div className="hidden md:block lg:block ">
              <FilterSection
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              handleCategoryChange={handleCategoryChange}
            />
            </div>

            {/* Mobile Filter Modal */}
            {openFilter && (
              <div className="fixed inset-0 bg-black/70 background-blur-md bg-opacity-50 z-51 flex justify-center items-center md:hidden">
                <div className="bg-white p-4 rounded-md w-full overflow-y-auto">
                  <button
                    className="text-red-500 text-lg font-semibold mb-4"
                    onClick={() => setOpenFilter(false)}
                  >
                    Close
                  </button>
                  <FilterSection
                    search={search}
                    setSearch={setSearch}
                    category={category}
                    setCategory={setCategory}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    handleCategoryChange={handleCategoryChange}
                  />
                </div>
              </div>
            )}
            {/* Product Section  */}
            <div className="flex flex-col w-full">
              {filteredData?.length === 0 ? (
                <div className="flex justify-center items-center mx-auto text-zinc-500 italic text-xl py-10 ">
                  No products matching your filters.
                </div>
              ) : (
                <>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 ">
                    {filteredData
                      ?.slice((page - 1) * 8, page * 8)
                      .map((product, index) => {
                        return <ProductCard key={index} product={product} />;
                      })}
                  </div>
                  <Pagination
                    pageHandler={pageHandler}
                    page={page}
                    dynamicPage={dynamicPage}
                  />
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="text-2xl text-zinc-500 italic text-center pt-10 h-screen">
            <img src={Loading} alt="Loading..." className="mx-auto w-20 h-20" />
            <p>Loading products...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;

// ================================================
// import React, { useEffect, useState } from "react";
// import { getData } from "./../../context/DataContext";
// import FilterSection from "../../components/FilterSection";
// import Loading from "../../../src/assets/Loading.gif";
// import ProductCard from "../../components/ProductCard";
// import Pagination from "../../components/Pagination";
// import MobileFilter from "../../components/MobileFilter";
// import { Link } from "react-router-dom";

// const Shop = () => {
//   const { data, fetchAllProducts } = getData();

//   // Filter states
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [priceRange, setPriceRange] = useState([0, 5000]);
//   const [page, setPage] = useState(1);
//   const [openFilter, setOpenFilter] = useState(false); // Mobile filter toggle

//   useEffect(() => {
//     fetchAllProducts();
//   }, []);

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//     setPage(1);
//   };

//   const pageHandler = (selectPage) => {
//     setPage(selectPage);
//   };

//   const filteredData = data?.filter(
//     (item) =>
//       item.title.toLowerCase().includes(search.toLowerCase()) &&
//       (category === "All" || item.category === category) &&
//       item.price >= priceRange[0] &&
//       item.price <= priceRange[1]
//   );
//   const dynamicPage = Math.ceil(filteredData?.length / 10);

//   return (
//     <section>
//       <div className="max-w-7xl mx-auto px-4 pb-10 mt-25">
//         {/* Breadcrumb Navigation */}
//         <div className="px-2 pt-5 mb-5">
//           <nav className="text-sm text-zinc-500">
//             <ol className="list-reset flex flex-wrap items-center gap-1">
//               <li>
//                 <Link to="/" className="hover:text-black font-medium">Home</Link>
//                 <span className="mx-1">/</span>
//               </li>
//               <li className="text-zinc-700 font-semibold truncate max-w-[80vw]">Shop</li>
//             </ol>
//           </nav>
//         </div>

//         {/* Mobile Filter Toggle Button */}
//         <MobileFilter setOpenFilter={setOpenFilter} />

//         {data?.length > 0 ? (
//           <div className="flex gap-8 md:flex-row lg:flex-row flex-col">
//             {/* Desktop Filter Section */}
//             <div className="hidden md:block lg:block w-full md:w-[250px]">
//               <FilterSection
//                 search={search}
//                 setSearch={setSearch}
//                 category={category}
//                 setCategory={setCategory}
//                 priceRange={priceRange}
//                 setPriceRange={setPriceRange}
//                 handleCategoryChange={handleCategoryChange}
//               />
//             </div>

//             {/* Mobile Filter Modal */}
//             {openFilter && (
//               <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center md:hidden">
//                 <div className="bg-white p-4 rounded-md w-[90%] max-h-[90vh] overflow-y-auto">
//                   <button
//                     className="text-red-500 font-semibold mb-4"
//                     onClick={() => setOpenFilter(false)}
//                   >
//                     Close
//                   </button>
//                   <FilterSection
//                     search={search}
//                     setSearch={setSearch}
//                     category={category}
//                     setCategory={setCategory}
//                     priceRange={priceRange}
//                     setPriceRange={setPriceRange}
//                     handleCategoryChange={handleCategoryChange}
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Product Section */}
//             <div className="flex flex-col w-full">
//               {filteredData?.length === 0 ? (
//                 <div className="flex justify-center items-center mx-auto text-zinc-500 italic text-xl py-10">
//                   No products matching your filters.
//                 </div>
//               ) : (
//                 <>
//                   <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
//                     {filteredData
//                       ?.slice((page - 1) * 10, page * 10)
//                       .map((product, index) => (
//                         <ProductCard key={index} product={product} />
//                       ))}
//                   </div>
//                   <Pagination
//                     pageHandler={pageHandler}
//                     page={page}
//                     dynamicPage={dynamicPage}
//                   />
//                 </>
//               )}
//             </div>
//           </div>
//         ) : (
//           <div className="text-2xl text-zinc-500 italic text-center pt-10 h-screen">
//             <img src={Loading} alt="Loading..." className="mx-auto w-20 h-20" />
//             <p>Loading products...</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Shop;
