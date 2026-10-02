import { useState } from "react";
import { Link } from "react-router-dom"; 
import { useCart } from "../../Context/CartContext";

function ProductCard({ product, linkTo = `/product/${product.id}`, hideAddToCart = false }) {
  const [isLoaded, setIsLoaded] = useState(false);
  
 
  const { cart, addToCart } = useCart();


  const isInCart = cart.some(item => item.id === product.id);
  const isCartFull = cart.length >= 10; 

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    if (!isInCart && !isCartFull) {
      addToCart(product, 1);
    }
  };


  let buttonText = "Add to cart";
  let isDisabled = false;

  if (isInCart) {
    buttonText = "Added to cart";
    isDisabled = true;
  } else if (isCartFull) {
    buttonText = "Cart Full (Max 10)";
    isDisabled = true;
  } else if (product.stock <= 0) {
    buttonText = "Out of stock";
    isDisabled = true;
  }

  return (
    <div className="w-full max-w-47.5 md:max-w-63.75 h-125 md:h-132.5 flex flex-col justify-between">
      <Link to={linkTo} className="w-full h-113.25 flex flex-col gap-6 cursor-pointer">
        <div className="w-full h-60 md:h-80.25 bg-brand-dark rounded relative overflow-hidden group">
          {!isLoaded && (
            <div className="absolute inset-0 bg-[#2d2732] animate-pulse flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-gray-500 border-t-white rounded-full animate-spin" />
            </div>
          )}
          <img 
            src={product.images[0]} 
            alt={product.title} 
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-contain transition-opacity duration-300 group-hover:scale-105 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`} 
          />
        </div>
        
        <div className="w-full h-auto flex flex-col">
          {product?.category && (
            <span className="font-inter text-xs font-medium text-[#6D7585] uppercase tracking-wider mb-1">
              {product.category}
            </span>
          )}
          <p className="font-inter uppercase text-display-2 font-semibold line-clamp-2 hover:text-gray-600 transition-colors">
            {product.title}
          </p>
          <p className="font-inter text-display-2 font-semibold">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <p className="w-full font-inter text-display-2 font-extralight text-[#6D7585] line-clamp-2">
          {product.description}
        </p>
      </Link>
    
      {!hideAddToCart && (
        <button 
          onClick={handleAddToCart}
          disabled={isDisabled}
          className={`w-full h-9.75 flex justify-center items-center border font-inter font-semibold text-display-1 transition-all ${
            isDisabled 
              ? "bg-gray-200 text-gray-500 border-gray-200 cursor-not-allowed" 
              : "border-black hover:bg-black hover:text-white cursor-pointer"
          }`}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default ProductCard;