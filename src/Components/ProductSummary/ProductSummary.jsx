import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; 
import { useCart } from "../Context/CartContext"; 
import { useWishlist } from "../Context/WishlistContext";

import staricon from "../../assets/../assets/shared assets/Star.svg";
import Linkdinicon from "../../assets/social icons/linkedin-svgrepo-com.svg";
import YouTubeicon from "../../assets/social icons/youtube.svg";
import git from "../../assets/social icons/git.svg";
import Netlifyicon from "../../assets/social icons/netlify-svgrepo-com.svg";
import OfflineErrorState from "../Common/OfflineErrorState";

function ImageWithLoader({ src, alt, className = "", imgClassName = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-8 h-8 border-3 border-brand-dark border-t-transparent rounded-full animate-spin" />
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

function OpenSummaryPage() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const { cart, addToCart } = useCart(); 
  const { toggleWishlist, isInWishlist } = useWishlist(); 
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedQty, setSelectedQty] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const fetchSingleProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (!response.ok) throw new Error("Could not fetch product details"); 
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError(error.message);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchSingleProduct();
  }, [id]);
  
  if (loading) return (
    <div className="w-full h-125 py-20 flex items-center justify-center gap-3 font-inter text-display-3 text-gray-500">
      <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
      Loading product details...
    </div>
  );

  if (error) return <OfflineErrorState onRetry={fetchSingleProduct} />;
  if (!product) return <div className="w-full py-20 text-center font-inter text-display-3 text-red-500">Product not found.</div>;

  const cartItem = cart.find(item => item.id === product.id);
  const qtyInCart = cartItem ? cartItem.quantity : 0;
  
  const currentStock = product.stock - qtyInCart;
  
  const maxAllowedForProduct = Math.min(product.stock, 10);
  const remainingAllowed = maxAllowedForProduct - qtyInCart;
  const isMaxReached = remainingAllowed <= 0;
  const isCartFull = cart.length >= 10 && !cartItem; 

  const isWishlisted = isInWishlist(product.id);

  const discountedPrice = (product.price - (product.price * (product.discountPercentage / 100))).toFixed(2);
  const originalPrice = product.price.toFixed(2);

  const handleIncrement = () => {
    if (selectedQty < remainingAllowed) setSelectedQty(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (selectedQty > 1) setSelectedQty(prev => prev - 1);
  };

  const handleAddToCart = () => {
    if (!isMaxReached && !isCartFull && currentStock > 0) {
      const productToAdd = { ...product, price: parseFloat(discountedPrice) };
      addToCart(productToAdd, selectedQty);
      setSelectedQty(1); 
    }
  };

  const handleBuyNow = () => {
    if (!isMaxReached && !isCartFull && currentStock > 0) {
      const productToAdd = { ...product, price: parseFloat(discountedPrice) };
      addToCart(productToAdd, selectedQty);
    }
    navigate("/cart");
  };

  const handleWishlistClick = () => {
    toggleWishlist(product);
  };

  return (
    <div className="w-full max-w-360 mx-auto px-fluid-x py-5 flex flex-col gap-12.5 bg-white">
      
      <div className="w-full flex items-center gap-2">
        <Link to="/" className="font-inter text-display-2 font-light text-[#6D7585] hover:text-black">Home</Link>
        <p className="font-inter text-display-2 font-light text-[#6D7585]">/</p>
        <Link to="/shop" className="font-inter text-display-2 font-light text-[#6D7585] hover:text-black">Shop</Link>
        <p className="font-inter text-display-2 font-light text-[#6D7585]">/</p>
        <p className="font-inter text-display-2 font-medium text-black line-clamp-1">{product.title}</p>
      </div>

      <div className="w-full max-w-277.5 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15">
        
    
        <ImageWithLoader 
          src={product.images[0]} 
          alt={product.title} 
          className="w-full rounded-sm overflow-hidden aspect-4/5 bg-[#F3F4F6]" 
          imgClassName="w-full h-full object-contain mix-blend-multiply" 
        />

        <div className="w-full pt-2.5 pb-7.5 flex flex-col gap-8">
          
          <div className="w-full flex flex-col gap-4">
            <h1 className="font-inter text-display-5 font-bold uppercase">{product.title}</h1>
            
            <div className="w-full flex gap-4 md:gap-10 items-center">
              <div className="flex gap-2 items-center">
                <span className="font-inter font-light text-display-3">Rating:</span>
                <span className="font-inter font-light text-display-3">{product.rating}</span>
                <div className="w-3 h-3"><img src={staricon} alt="star" className="w-full h-full object-contain" /></div>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="font-inter text-display-3">Stock:</span>
                <span className={`${currentStock > 0 ? "text-[#c69b7b]" : "text-red-500"} font-inter font-medium text-display-3`}>
                  {currentStock > 0 ? (product.availabilityStatus || "In stock") : "Out of stock"}
                </span>
              
                <span className={`font-inter font-light text-display-1 ${currentStock === 0 ? "text-red-500" : ""}`}>
                  {currentStock}
                </span>
              </div>
            </div>

            <div className="w-full flex gap-3 items-center">
              <span className="font-inter text-display-6">${discountedPrice}</span>
              <span className="font-inter text-display-6 text-[#9CA3AF] line-through">${originalPrice}</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <span className="font-inter font-semibold text-display-3">Warranty Information: {product.warrantyInformation || "1 month warranty"}</span>
            <p className="font-inter text-display-3">Brand: {product.brand || "Generic"}</p>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full h-12 flex gap-2.5">
              
              <div className="w-full max-w-32.5 flex items-center justify-between border px-4">
                <button 
                  onClick={handleDecrement} 
                  disabled={selectedQty <= 1 || isMaxReached || isCartFull || currentStock === 0} 
                  className="font-inter font-light text-display-6 cursor-pointer disabled:opacity-30"
                >
                  -
                </button>
            
                <button className="font-inter font-semibold text-display-4">
                  {isMaxReached || currentStock === 0 ? 0 : selectedQty}
                </button>
                <button 
                  onClick={handleIncrement} 
                  disabled={selectedQty >= remainingAllowed || isMaxReached || isCartFull || currentStock === 0} 
                  className="font-inter font-light text-display-6 cursor-pointer disabled:opacity-30"
                >
                  +
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                disabled={isMaxReached || isCartFull || currentStock === 0}
                className={`flex-1 h-12 flex justify-center items-center transition-all ${
                  (isMaxReached || isCartFull || currentStock === 0) 
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                    : "text-white bg-brand-gray cursor-pointer hover:bg-white hover:border hover:text-black"
                }`}
              >
                <span className="font-inter font-semibold text-display-2 uppercase">
                  {currentStock === 0 ? "Out of Stock" : isMaxReached ? "Max Allowed Added" : isCartFull ? "Cart Full" : "Add to Cart"}
                </span>
              </button>
            </div>

            <div className="w-full h-12 flex gap-2.5">
              
              <button 
                onClick={handleBuyNow}
                disabled={currentStock === 0 || isMaxReached || (isCartFull && !cartItem)}
                className={`flex-1 h-12 border flex justify-center items-center transition-all ${
                   (currentStock === 0 || isMaxReached || (isCartFull && !cartItem)) 
                     ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                     : "bg-white cursor-pointer hover:bg-brand-gray hover:text-white"
                }`}
              >
                <span className="font-inter text-display-2 font-semibold uppercase">Buy now</span>
              </button>

              <button 
                onClick={handleWishlistClick}
                className={`w-12 h-12 flex justify-center items-center border cursor-pointer transition-colors ${
                  isWishlisted
                    ? "border-rose-200 bg-rose-50 hover:bg-rose-100"
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
              >
                <div className="w-5 h-5 flex justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={isWishlisted ? "#F43F5E" : "none"}
                    stroke={isWishlisted ? "#F43F5E" : "currentColor"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-full h-full transition-all duration-300 ${isWishlisted ? 'text-rose-500 scale-110' : 'text-gray-600'}`}
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
              </button>

            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <p className="font-inter font-semibold text-display-3">Share this:</p>
            <div className="flex gap-4 items-center">
              <a href="https://www.linkedin.com/in/owais-khan-ab3ab2436/" target="_blank" rel="noreferrer" className="w-5 h-5 hover:opacity-70 transition-opacity"><img src={Linkdinicon} alt="LinkedIn" className="w-full h-full object-contain" /></a>
              <a href="https://github.com/owaiskhanfrontend/" target="_blank" rel="noreferrer" className="w-5 h-5 hover:opacity-70 transition-opacity"><img src={git} alt="GitHub" className="w-full h-full object-contain" /></a>
              <a href="https://www.youtube.com/@OwaisKhanFrontEnd-dev" target="_blank" rel="noreferrer" className="w-5 h-5 hover:opacity-70 transition-opacity"><img src={YouTubeicon} alt="YouTube" className="w-full h-full object-contain" /></a>
              <a href="https://owaiskhan-weather-dashboard.netlify.app/" target="_blank" rel="noreferrer" className="w-5 h-5 hover:opacity-70 transition-opacity"><img src={Netlifyicon} alt="Netlify" className="w-full h-full object-contain" /></a>
            </div>
          </div>

          <div className="w-full flex flex-col border-t pt-4">
            
            <div className="w-full flex flex-col border-b border-gray-100 last:border-none">
              <div 
                className="w-full h-15 flex justify-between items-center cursor-pointer group"
                onClick={() => toggleAccordion("details")}
              >
                <span className="font-inter font-semibold text-display-3 group-hover:text-gray-600 transition-colors">Details</span>
                <button className="font-inter font-light text-display-6">{openAccordion === "details" ? "-" : "+"}</button>
              </div>
              {openAccordion === "details" && (
                <div className="w-full pb-5">
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}
            </div>

            <div className="w-full flex flex-col border-b border-gray-100 last:border-none">
              <div 
                className="w-full h-15 flex justify-between items-center cursor-pointer group"
                onClick={() => toggleAccordion("dimensions")}
              >
                <span className="font-inter font-semibold text-display-3 group-hover:text-gray-600 transition-colors">Dimensions</span>
                <button className="font-inter font-light text-display-6">{openAccordion === "dimensions" ? "-" : "+"}</button>
              </div>
              {openAccordion === "dimensions" && (
                <div className="w-full pb-5 grid grid-cols-2 gap-4">
                  {product.weight && (
                    <div className="flex flex-col">
                      <span className="font-inter text-xs text-gray-400 uppercase tracking-wider">Weight</span>
                      <span className="font-inter text-sm text-black">{product.weight} units</span>
                    </div>
                  )}
                  {product.dimensions?.width && (
                    <div className="flex flex-col">
                      <span className="font-inter text-xs text-gray-400 uppercase tracking-wider">Width</span>
                      <span className="font-inter text-sm text-black">{product.dimensions.width}</span>
                    </div>
                  )}
                  {product.dimensions?.height && (
                    <div className="flex flex-col">
                      <span className="font-inter text-xs text-gray-400 uppercase tracking-wider">Height</span>
                      <span className="font-inter text-sm text-black">{product.dimensions.height}</span>
                    </div>
                  )}
                  {product.dimensions?.depth && (
                    <div className="flex flex-col">
                      <span className="font-inter text-xs text-gray-400 uppercase tracking-wider">Depth</span>
                      <span className="font-inter text-sm text-black">{product.dimensions.depth}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="w-full flex flex-col border-b border-gray-100 last:border-none">
              <div 
                className="w-full h-15 flex justify-between items-center cursor-pointer group"
                onClick={() => toggleAccordion("reviews")}
              >
                <span className="font-inter font-semibold text-display-3 group-hover:text-gray-600 transition-colors">Reviews</span>
                <button className="font-inter font-light text-display-6">{openAccordion === "reviews" ? "-" : "+"}</button>
              </div>
              {openAccordion === "reviews" && (
                <div className="w-full pb-5 flex flex-col gap-4">
                  {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.slice(0, 3).map((review, index) => (
                      <div key={index} className="w-full p-4 border border-gray-200 rounded-sm bg-gray-50/50 flex flex-col gap-2.5">
                        <div className="w-full flex justify-between items-start">
                          <div className="flex flex-col">
                            <span className="font-inter font-medium text-sm text-black">{review.reviewerName}</span>
                            <span className="font-inter text-xs text-gray-500">{review.reviewerEmail}</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <span className="font-inter font-medium text-sm">{review.rating}</span>
                            <img src={staricon} alt="star" className="w-3.5 h-3.5 object-contain" />
                          </div>
                        </div>
                        <p className="font-inter text-sm text-gray-700 italic">"{review.comment}"</p>
                        <span className="font-inter text-xs text-gray-400">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="font-inter text-sm text-gray-500">No reviews available.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div> 
      </div> 
    </div> 
  );
}

export default OpenSummaryPage;