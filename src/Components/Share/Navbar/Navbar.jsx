import { useState } from "react";
import { Link } from "react-router-dom"; 
import { useCart } from "../../Context/CartContext"; 
import { useWishlist } from "../../Context/WishlistContext"; 

import LogoIcon from "../../../assets/shared assets/Icon.svg";
import M from "../../../assets/shared assets/Vector.svg";
import O1 from "../../../assets/shared assets/Vector (1).svg";
import O2 from "../../../assets/shared assets/Vector (2).svg";
import N from "../../../assets/shared assets/Vector (3).svg";

import Menuicon from "../../../assets/shared assets/Menu.svg";
import SearchIcon from "../../../assets/shared assets/Search.svg";
import AvatarIcon from "../../../assets/shared assets/Avatar.svg";

import ShoppingCartIcon from "../../../assets/shared assets/Shopping cart.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const { cart } = useCart(); 
  const { wishlist } = useWishlist(); 

  const cartItemCount = cart.length; 
  const wishlistItemCount = wishlist.length; 

  const letterVectors = [
    { src: M, alt: "M", width: "w-[21.8px]" },
    { src: O1, alt: "O", width: "w-[19.8px]" },
    { src: O2, alt: "O", width: "w-[20.8px]" },
    { src: N, alt: "N", width: "w-[20.8px]" },
  ];

  return (
    <header className="w-full max-w-360 h-20.5 py-5 md:py-0 px-fluid-x mx-auto flex justify-between items-center relative bg-white z-50 border-b">
      
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu" 
        className="md:hidden w-6 h-6 hover:opacity-70 transition-opacity cursor-pointer"
      >
        <img src={Menuicon} alt="Open Menu" className="w-full h-full object-contain" />
      </button>

      <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center gap-[10px]">
        <img src={LogoIcon} alt="Moon Logo" className="w-10 h-9.5 object-contain" />
        <div className="flex gap-0.75 h-5">
          {letterVectors.map((letter, index) => (
            <img key={index} src={letter.src} alt={letter.alt} className={`${letter.width} h-full object-contain`} />
          ))}
        </div>
      </Link>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-8 text-display-2 font-inter font-normal text-black">
          <li><Link to="/" className="hover:opacity-70 transition-opacity">Home</Link></li>
          <li><Link to="/shop" className="hover:opacity-70 transition-opacity">Shop</Link></li>
          <li><Link to="/about" className="hover:opacity-70 transition-opacity">About</Link></li>
          <li><Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link></li>
        </ul>
      </nav>

      <div className="flex justify-end items-center gap-6">

          <Link to="/shop" aria-label="Search" className="hidden md:block w-5 h-5 hover:opacity-70 transition-opacity cursor-pointer">
            <img src={SearchIcon} alt="Search" className="w-full h-full object-contain" />
          </Link>
          
          <Link to="/profile" aria-label="Profile" className="hidden md:block w-5 h-5 hover:opacity-70 transition-opacity cursor-pointer">
            <img src={AvatarIcon} alt="User Profile" className="w-full h-full object-contain" />
          </Link>
          
          <Link to="/wishlist" aria-label="Wishlist" className="relative hidden md:block w-5 h-5 hover:opacity-70 transition-opacity cursor-pointer">
        
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={wishlistItemCount > 0 ? "#F43F5E" : "none"}
              stroke={wishlistItemCount > 0 ? "#F43F5E" : "currentColor"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-full h-full transition-all duration-300 ${wishlistItemCount > 0 ? 'text-rose-500 scale-110' : 'text-[#595667]'}`}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            
          
            {wishlistItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D97757] ring-2 ring-white text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {wishlistItemCount}
              </span>
            )}
          </Link>
          
          <Link to="/cart" aria-label="Shopping Cart" className="relative w-5 h-5 hover:opacity-70 transition-opacity cursor-pointer">
            <img src={ShoppingCartIcon} alt="Cart" className="w-full h-full object-contain" />
            
         
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D97757] ring-2 ring-white text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20.5 left-0 w-full bg-white border-b shadow-lg md:hidden flex flex-col p-5 gap-4 z-40 text-display-2 font-inter font-normal text-black">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/wishlist" aria-label="Wishlist" className="relative w-5 h-5 hover:opacity-70 transition-opacity cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={wishlistItemCount > 0 ? "#F43F5E" : "none"}
              stroke={wishlistItemCount > 0 ? "#F43F5E" : "currentColor"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-full h-full transition-all duration-300 ${wishlistItemCount > 0 ? 'text-rose-500 scale-110' : 'text-[#595667]'}`}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            {wishlistItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D97757] ring-2 ring-white text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {wishlistItemCount}
              </span>
            )}
          </Link>
          <Link to="/profile" aria-label="Profile" className="w-5 h-5 hover:opacity-70 transition-opacity cursor-pointer">
            <img src={AvatarIcon} alt="User Profile" className="w-full h-full object-contain" />
          </Link>

           <Link to="/Shop" aria-label="Search" className="w-5 h-5 hover:opacity-70 transition-opacity cursor-pointer">
            <img src={SearchIcon} alt="Search" className="w-full h-full object-contain" />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;