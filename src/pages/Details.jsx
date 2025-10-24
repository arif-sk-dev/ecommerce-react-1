import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar, FaCartPlus, FaArrowLeft, FaHeart, FaShareAlt } from "react-icons/fa";
import { FiTruck, FiShield, FiRefreshCw } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishListed, setIsWishListed] = useState(false);

  const {addToCart} = useCart(); // add To Cart

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const renderStars = (rate) => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  if (!product) {
    return (
      <div className="max-w-5xl flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black mx-auto mb-4"></div>
          <p className="text-zinc-500 italic">Loading product details...</p>
        </div>
      </div>
    );
  }
 
  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-b from-zinc-50 to-white mt-25">

      {/* Breadcrumb Navigation start */}
      <div className="max-w-6xl mx-auto px-4 pt-5">
        <nav className="text-sm text-zinc-500">
          <ol className="list-reset flex flex-wrap items-center gap-1">
            <li>
              <Link to="/" className="hover:text-black font-medium">Home</Link>
              <span className="mx-1">/</span>
            </li>
            <li>
              <Link to="/shop" className="hover:text-black font-medium">Shop</Link>
              <span className="mx-1">/</span>
            </li>
            <li className="text-zinc-700 font-semibold truncate max-w-[80vw]">
              {product.title}
            </li>
          </ol>
        </nav>
      </div>
      {/* Breadcrumb Navigation end */}

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-zinc-600 hover:text-black transition-colors">
          <FaArrowLeft />
          <span>Back to Shop</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Image Section */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-200">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-contain transition-transform hover:scale-105 duration-300"
              />
            </div>
            
            {/* Thumbnail Gallery (simulated with same image) */}
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-1 bg-white rounded-lg p-1 border-1 transition-all ${
                    selectedImage === idx ? "border-black shadow-md" : "border-zinc-200 hover:border-zinc-400"
                  }`}
                >
                  <img src={product.image} alt={`View ${idx + 1}`} className="w-full h-17 object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            {/* Category Badge */}
            <div>
              <span className="inline-block bg-zinc-100 text-zinc-700 px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wide">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {renderStars(product.rating.rate)}
              </div>
              <span className="text-zinc-600 font-medium">{product.rating.rate}</span>
              <span className="text-zinc-400">•</span>
              <span className="text-zinc-600">{product.rating.count} reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-green-600">${product.price}</span>
              <span className="text-lg text-zinc-400 line-through">${(product.price * 1.3).toFixed(2)}</span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Save 23%
              </span>
            </div>

            {/* Description */}
            <div className="pt-4 border-t border-zinc-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Product Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <span className="font-semibold text-gray-800">Quantity:</span>
              <div className="flex items-center border-2 border-zinc-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-1 bg-zinc-100 hover:bg-zinc-200 transition-colors font-semibold cursor-pointer"
                >
                  −
                </button>
                <span className="px-4 py-1 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-1 bg-zinc-100 hover:bg-zinc-200 transition-colors font-semibold cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="flex-1 bg-black text-white px-5 py-2 rounded-xl hover:bg-zinc-800 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer" onClick={()=> addToCart(product)}>
                <FaCartPlus className="text-xl" />
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishListed(!isWishListed)}
                className={`px-3 py-2 rounded-xl border-2 transition-all cursor-pointer ${
                  isWishListed
                    ? "bg-red-50 border-red-500 text-red-500"
                    : "bg-white border-zinc-200 text-zinc-600 hover:border-zinc-400"
                }`}
              >
                <FaHeart className={`text-xl ${isWishListed ? "fill-current" : ""}`} />
              </button>
              <button className="px-3 py-2 rounded-xl border-2 border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400 transition-all cursor-pointer">
                <FaShareAlt className="text-xl" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-zinc-50 rounded-xl p-1.5 text-center border border-zinc-200">
                <FiTruck className="text-3xl mx-auto mb-2 text-zinc-700" />
                <p className="text-sm font-medium text-zinc-700">Free Shipping</p>
                <p className="text-xs text-zinc-500 mt-1">On orders $50+</p>
              </div>
              <div className="bg-zinc-50 rounded-xl p-1.5 text-center border border-zinc-200">
                <FiShield className="text-3xl mx-auto mb-2 text-zinc-700" />
                <p className="text-sm font-medium text-zinc-700">Secure Payment</p>
                <p className="text-xs text-zinc-500 mt-1">100% protected</p>
              </div>
              <div className="bg-zinc-50 rounded-xl p-1.5 text-center border border-zinc-200">
                <FiRefreshCw className="text-3xl mx-auto mb-2 text-zinc-700" />
                <p className="text-sm font-medium text-zinc-700">Easy Returns</p>
                <p className="text-xs text-zinc-500 mt-1">30-day policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;