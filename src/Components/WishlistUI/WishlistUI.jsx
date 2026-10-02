import { Link } from "react-router-dom";
import { useState } from "react";
import Trashicon from "../../assets/../assets/shared assets/Trash.svg";
import Closeicon from "../../assets/../assets/shared assets/Close.svg";
import { useWishlist } from "../Context/WishlistContext";
import { useCart } from "../Context/CartContext";

function ImageWithLoader({ src, alt, className = "", imgClassName = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-6 h-6 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`${imgClassName} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}

function Wishlistui() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart, cart } = useCart(); 

  return (
    <div className="w-full max-w-360 mx-auto px-fluid-x py-5 flex flex-col gap-12.5 bg-white">
      
      <div className="w-full flex items-center gap-2">
        <Link to="/" className="font-inter text-display-2 font-light text-[#6D7585] hover:text-black">
          Home
        </Link>
        <p className="font-inter text-display-2 font-light text-[#6D7585]">
          /
        </p>
        <span className="font-inter text-display-2 font-light">
          Wishlist
        </span>
      </div>

      <div className="w-full max-w-277.5 flex flex-col gap-10">
        <span className="font-inter font-semibold text-display-6">
          Wishlist ({wishlist.length} {wishlist.length === 1 ? "item" : "items"})
        </span>

        <div className="w-full flex flex-col">
          
          <div className="w-full h-12 hidden md:grid md:grid-cols-[50px_120px_1fr_130px_150px] gap-2.5 items-center bg-brand-gray text-white pr-12.5">
            <div className="w-full flex justify-center">
              <img src={Trashicon} alt="Trash" className="w-5 h-5 object-contain" />
            </div>
            <span className="font-inter text-display-2 font-semibold text-center uppercase">Photo</span>
            <span className="font-inter text-display-2 font-semibold text-center uppercase">Product</span>
            <span className="font-inter text-display-2 font-semibold text-center uppercase">Price</span>
            <span className="font-inter text-display-2 font-semibold text-center uppercase">Action</span>
          </div>

          <div className="w-full">
            {wishlist.length === 0 ? (
              <div className="py-10 text-center font-inter text-display-4 text-gray-500 border-b">
                Your wishlist is currently empty.
              </div>
            ) : (
              wishlist.map((item) => {
                const isInCart = cart.some((cartItem) => cartItem.id === item.id);
                const isOutofStock = item.stock === 0;
                const isDisabled = isInCart || isOutofStock;

                const actualPrice = item.discountPercentage 
                  ? item.price - (item.price * (item.discountPercentage / 100)) 
                  : item.price;

                let buttonText = "Add to Cart";
                if (isInCart) buttonText = "In Cart";
                else if (isOutofStock) buttonText = "Out of Stock";

                return (
                  <div key={item.id} className="w-full border-b">
                    
                    <div className="w-full flex flex-col gap-5 py-7.5 md:hidden">
                      <button 
                        onClick={() => removeFromWishlist(item.id)} 
                        className="w-5 h-5 cursor-pointer"
                      >
                        <img src={Closeicon} alt="Close" className="w-full h-full object-contain" />
                      </button>
                      <div className="w-full h-35.25 gap-5 flex items-center">
                        <ImageWithLoader
                          src={item.thumbnail || item.images?.[0] || item.image}
                          alt={item.title}
                          className="w-full max-w-30 h-full bg-[#F3F4F6]"
                          imgClassName="w-full h-full object-contain"
                        />
                        <span className="font-inter text-display-2 font-semibold uppercase text-left">
                          {item.title}
                        </span>
                      </div>

                      <div className="w-full flex justify-between">
                        <span className="font-inter text-display-2 text-brand-gray uppercase">Price:</span>
                        <span className="font-inter text-display-2">${actualPrice.toFixed(2)}</span>
                      </div>

                      <button
                        disabled={isDisabled}
                        onClick={() => addToCart({ ...item, price: actualPrice }, 1)}
                        className={`w-full h-12 flex items-center justify-center font-inter text-display-2 uppercase font-semibold transition-all ${
                          isDisabled
                            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                            : "bg-brand-gray text-white hover:bg-white hover:border hover:text-black cursor-pointer"
                        }`}
                      >
                        {buttonText}
                      </button>
                    </div>

                    <div className="w-full hidden md:grid md:grid-cols-[50px_120px_1fr_130px_150px] gap-2.5 items-center py-5 pr-12.5">
                      <div className="w-full flex justify-center">
                        <button 
                          onClick={() => removeFromWishlist(item.id)}
                          className="w-4 h-4 cursor-pointer hover:opacity-70 transition-opacity"
                        >
                          <img src={Closeicon} alt="Close" className="w-full h-full object-contain" />
                        </button>
                      </div>

                      <div className="w-full flex justify-center">
                        <ImageWithLoader
                          src={item.thumbnail || item.images?.[0] || item.image}
                          alt={item.title}
                          className="w-30 h-35.25 bg-[#F3F4F6]"
                          imgClassName="w-full h-full object-contain"
                        />
                      </div>

                      <span className="font-inter text-display-2 font-semibold uppercase text-center">
                        {item.title}
                      </span>

                      <span className="font-inter text-display-2 font-semibold uppercase text-center">
                        ${actualPrice.toFixed(2)}
                      </span>

                      <div className="w-full flex justify-center">
                        <button
                          disabled={isDisabled}
                          onClick={() => addToCart({ ...item, price: actualPrice }, 1)}
                          className={`w-full h-10 flex items-center justify-center font-inter text-display-2 uppercase font-semibold transition-all ${
                            isDisabled
                              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                              : "bg-brand-gray text-white hover:bg-white hover:border hover:text-black cursor-pointer"
                          }`}
                        >
                          {buttonText}
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlistui;