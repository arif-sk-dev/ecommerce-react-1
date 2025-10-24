import React from "react";
import { useCart } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuNotebookPen } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { BsHandbag } from "react-icons/bs";
import emptyCart from "../../assets/empty-cart.png"

const Cart = () => {
  const { cartItem, updateQuantity, removeItem } = useCart();

  const totalPrice = cartItem.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <div className="max-w-7xl mx-auto mt-20 p-3 text-zinc-600">

      {/* Breadcrumb Navigation start */}
      <div className="py-5 text-left">
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
              Cart Page 
            </li>
          </ol>
        </nav>
      </div>
      {/* Breadcrumb Navigation end */}

      <h2 className="text-2xl text-zinc-600 border-b border-zinc-500 font-semibold">
        Your Cart ({cartItem.length} items)
      </h2>
      {cartItem.length === 0 ? (
        <div className="flex flex-col gap-5 justify-center items-center">
          <p className="text-2xl text-zinc-400 text-center mt-15 italic">Oh No, Your Cart is Empty!</p>
          <img src={emptyCart} alt="" className="max-w-[300px] mx-auto" />
          <Link to="/shop"><button className="bg-red-500 px-3 py-1.5 text-white rounded-md mt-3 cursor-pointer hover:bg-red-600">Continue Shopping</button></Link>
        </div>
      ) : (
        <div>
          <div className="mt-10">
            {cartItem.map((item, index) => {
              return (
                <div
                  key={index}
                  className="sm max-w-7xl mx-auto bg-zinc-50 rounded-md flex gap-1.5 items-center justify-between mt-3 p-2"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-md"
                    />
                    <div>
                      <h1 className="w-[120px] md:w-[300px] lg:w-[350px] line-clamp-2">{item.title}</h1>
                      <p className="text-red-500 font-semibold text-lg">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="bg-zinc-300 flex gap-3 rounded-md font-semibold text-lg px-2 py-1">
                    <button onClick={()=> updateQuantity(item.id, "decrease")} className="cursor-pointer px-1">-</button>
                    <span>{item ?. quantity}</span>
                    <button onClick={()=> updateQuantity(item.id, "increase")} className="cursor-pointer px-1">+</button>
                  </div>
                  <div className="p-2 cursor-pointer text-lg text-zinc-600 hover:text-red-600" onClick={()=> removeItem(item.id)}>
                    <FaTrashAlt />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Placement section  */}
          <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mt-10">
            <div className="bg-zinc-100 p-7 rounded-md w-full">
              <h1 className="text-2xl text-zinc-600 font-semibold mb-4">Delivery Info</h1>

              <div className="flex flex-col space-y-1 mb-3">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="p-2 rounded-md w-full bg-white"
                />
              </div>

              <div className="flex flex-col space-y-1 mb-3">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="p-2 rounded-md w-full bg-white"
                />
              </div>

              <div className="flex flex-col md:flex-row w-full gap-5 mb-3">
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="">State</label>
                  <input
                    type="text"
                    placeholder="Your State"
                    className="p-2 rounded-md w-full bg-white"
                  />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="">Post Code</label>
                  <input
                    type="text"
                    placeholder="Your Post Code"
                    className="p-2 rounded-md w-full bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row w-full gap-5 mb-3">
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="">Country</label>
                  <input
                    type="text"
                    placeholder="Your Country"
                    className="p-2 rounded-md w-full bg-white"
                  />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Your Phone Number"
                    className="p-2 rounded-md w-full bg-white"
                  />
                </div>
              </div>

              <button className="bg-red-500 px-3 py-1.5 text-white rounded-md mt-3 cursor-pointer hover:bg-red-600 w-full md:w-auto">
                Submit
              </button>
            </div>

            {/* Bill Detail   */}
            <div className="border border-zinc-300 shadow-xl p-7 rounded-md w-full">
              <h1 className="text-2xl text-zinc-600 font-semibold mb-4">Bill Details</h1>

              <div className="flex flex-row justify-between space-y-1 mb-1">
                <div className="flex items-center gap-3">
                  <LuNotebookPen />
                  <p>Items Total</p>
                </div>
                <p className="font-semibold">${totalPrice.toFixed(2)}</p>
              </div>

              <div className="flex flex-row justify-between space-y-1 mb-1">
                <div className="flex items-center gap-3">
                  <TbTruckDelivery />
                  <p>Delivery Charge</p>
                </div>
                <p className="text-red-500 font-semibold"><span className="text-zinc-400 line-through pr-2">$5.99</span>FREE</p>
              </div>

              <div className="flex flex-row justify-between space-y-1 mb-3 border-b border-zinc-400">
                <div className="flex items-center gap-3">
                  <BsHandbag />
                  <p>Handling Charge</p>
                </div>
                <p className="font-semibold">$3.00</p>
              </div>

              <div className="flex flex-row justify-between space-y-1 mb-4 font-bold">
                <p>Grand Total</p>
                <p>${(totalPrice + 3).toFixed(2)}</p>
              </div>

              <div className="flex flex-col space-y-1 my-5 font-semibold">
                <label htmlFor="">Apply Promo Code </label>
                <div className="flex gap-3">
                  <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="p-2 rounded-md w-full bg-white font-light"
                  />
                  <button className="px-3 py-1.5 bg-red-300 text-zinc-700 rounded-md cursor-pointer hover:bg-red-400">Apply</button>
                </div>
              </div>

              <button className="bg-red-500 px-3 py-1.5 text-white rounded-md mt-3 cursor-pointer hover:bg-red-600 w-full ">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
