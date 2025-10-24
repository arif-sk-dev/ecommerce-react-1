import React, { useEffect, useState } from "react";
import ProductCard from './../../components/ProductCard';
import Pagination from "../../components/Pagination";


const HomeProduct = () => {
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);

        // Extract unique categories
        const uniqueCategories = [
          "All",
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on selected category
  const filteredProducts =
    filteredCategory === "All"
      ? products
      : products.filter((product) => product.category === filteredCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Handle category change (for Pagination)
  const handleCategoryChange = (categoryName) => {
    setFilteredCategory(categoryName);
    setPage(1); // Reset to first page on category change
  };

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {categories.map((categoryName) => (
          <button
            key={categoryName}
            // onClick={() => setFilteredCategory(categoryName)}
            onClick={() => handleCategoryChange(categoryName)}
            className={`px-4 py-2 rounded-full border cursor-pointer ${
              filteredCategory === categoryName
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            } hover:bg-black hover:text-white transition-all`}
          >
            {categoryName}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Change filteredProducts to paginatedProducts*/}
        {paginatedProducts.map((product) => (  
          <ProductCard key={product.id} product={product} /> 
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          page={page}
          pageHandler={setPage}
          dynamicPage={totalPages}
        />
      )}
    </div>
  );
};

export default HomeProduct;
