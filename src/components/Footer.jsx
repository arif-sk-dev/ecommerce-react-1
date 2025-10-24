import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import icon from '../assets/icon.png'

const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-black pt-10 pb-6 mt-20">
      <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <Link to="/">
            <img src={icon} alt="" className="w-14" />
          </Link>
          <p className="mt-4 text-sm text-zinc-600">Your one-stop destination for style, stories, and shopping.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-red-400 transition">Home</Link></li>
            <li><Link to="/shop" className="hover:text-red-400 transition">Shop</Link></li>
            <li><Link to="/blog" className="hover:text-red-400 transition">Blog</Link></li>
            <li><Link to="/about" className="hover:text-red-400 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-red-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-red-400 transition">FAQ</Link></li>
            <li><Link to="/returns" className="hover:text-red-400 transition">Returns</Link></li>
            <li><Link to="/privacy" className="hover:text-red-400 transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-red-400 transition">Terms & Conditions</Link></li>
            <li><Link to="/contact" className="hover:text-red-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-green-700 pt-4 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} CLOTHING. All rights reserved.
      </div>
      <div className="text-center text-xs text-zinc-500">Developed by: <span className="text-zinc-400 italic">Arif Hossain</span></div>
    </footer>
  );
};

export default Footer;
