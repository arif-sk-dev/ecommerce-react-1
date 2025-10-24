import { Link, NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import icon from '../assets/icon.png'
import { useCart } from "../context/CartContext";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); //handle scroll header shadow
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const {cartItem} = useCart(); // Cart Context

  //header Scrolling drop Shadow & bg color
  useEffect(() => {
      const changeNavbar = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", changeNavbar);
    }, []);

    //Auto close mobile menu on route change
    useEffect(()=> {
      setIsMobileMenuOpen(false);
    }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-1 transition duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-lg" : "" }`}>
      <nav className='container max-w-7xl mx-auto flex justify-between items-center py-2 px-4'>
        <Link to="/" className='w-13'>
          <img src={icon} alt="" />
        </Link >

        {/* Desktop Menu Item  */}
        <div className='flex-col md:flex-row items-center md:space-x-8 gap-5 hidden md:flex text-lg'>
          <NavLink to="/" className={({isActive}) => isActive ? "text-red-400 font-medium border-b-2" : "hover:text-red-400"}>Home</NavLink>
          <NavLink to="/shop" className={({isActive}) => isActive ? "text-red-400 font-medium border-b-2" : "hover:text-red-400"}>Shop</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? "text-red-400 font-medium border-b-2" : "hover:text-red-400"}>Blog</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-red-400 font-medium border-b-2" : "hover:text-red-400"}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-red-400 font-medium border-b-2" : "hover:text-red-400"}>Contact</NavLink>

          {/* Shopping Cart icon  */}
          <NavLink to="/cart" className='md:block cursor-pointer relative'>
            <FaShoppingCart className='text-xl' />
            {
              cartItem.length > 0 && (
                <sup className='absolute -top-2.5 -right-2.5 bg-red-400 text-white w-4.5 h-4.5 rounded-2xl flex items-center justify-center text-xs'>{cartItem.length}</sup>
              )
            }
          </NavLink>
        </div>

        {/* Mobile icon */}
          <button className="flex text-2xl md:hidden lg:hidden transition-transform duration-500"
            onClick={()=> setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label = "Toggle Menu"
          >
            {
              isMobileMenuOpen ? "✕" : "☰"
            }
          </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden lg:hidden bg-white shadow-md absolute top-full left-0 w-full h-screen z-40 transition-all duration-800 ease-in-out transform ${isMobileMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-5 opacity-0 pointer-events-none"}`}>
          <div className="flex flex-col items-start p-4 space-y-4 text-lg">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            <NavLink to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</NavLink>
            <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
            {/* <NavLink to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
              <FaShoppingCart />
              <span>Cart</span>
            </NavLink> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

