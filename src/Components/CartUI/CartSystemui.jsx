import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; 
import Trashicon from "../../assets/../assets/shared assets/Trash.svg";
import Closeicon from "../../assets/../assets/shared assets/Close.svg";
import { useCart } from "../Context/CartContext";
import PopupMessage from "../Common/PopupMessage";

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

function CartUi() {
  const { cart, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();
  const navigate = useNavigate();
  
  const [localPopup, setLocalPopup] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleUpdateCart = () => {
    setLocalPopup("Your cart totals are already up to date!");
  };

  return (
    <div className="w-full max-w-360 mx-auto px-fluid-x py-5 flex flex-col gap-12.5 bg-white relative">
      
      <div className="w-full flex items-center gap-2">
        <Link to="/" className="font-inter text-display-2 font-light text-[#6D7585] hover:text-black">
          Home
        </Link>
        <p className="font-inter text-display-2 font-light text-[#6D7585]">
          /
        </p>
        <Link to="/cart" className="font-inter text-display-2 font-light">
          Shopping Cart
        </Link>
      </div>

      <div className="w-full max-w-277.5 flex flex-col gap-10">
        <span className="font-inter font-semibold text-display-6">
          Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
        </span>

        <div className="w-full flex flex-col">
          
          <div className="w-full h-12 hidden md:grid md:grid-cols-[50px_120px_1fr_100px_130px_100px] gap-2.5 items-center bg-brand-gray text-white pr-12.5">
            <div className="w-full flex justify-center">
              <img src={Trashicon} alt="Trash" className="w-5 h-5 object-contain" />
            </div>
            <span className="font-inter text-display-2 font-semibold text-center uppercase">Photo</span>
            <span className="font-inter text-display-2 font-semibold text-center uppercase">Product</span>
            <span className="font-inter text-display-2 font-semibold text-center uppercase">Price</span>
            <span className="font-inter text-display-2 font-semibold text-center uppercase">Quantity</span>
            <span className="font-inter text-display-2 font-semibold text-center uppercase">Subtotal</span>
          </div>

          <div className="w-full">
            {cart.length === 0 ? (
              <div className="py-10 text-center font-inter text-display-4 text-gray-500 border-b">
                Your cart is currently empty.
              </div>
            ) : (
              cart.map((item) => {
                const maxStock = Math.min(10, item.stock || 10);
                const itemSubtotal = item.price * item.quantity;

                return (
                  <div key={item.id} className="w-full border-b">
                    
                    <div className="w-full flex flex-col gap-5 py-7.5 md:hidden">
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        className="w-5 h-5 cursor-pointer"
                      >
                        <img src={Closeicon} alt="Close" className="w-full h-full object-contain" />
                      </button>
                      <div className="w-full h-35.25 gap-5 flex items-center">
                        <ImageWithLoader
                          src={item.thumbnail || item.image}
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
                        <span className="font-inter text-display-2 ">${item.price.toFixed(2)}</span>
                      </div>

                      <div className="w-full flex justify-between h-12 items-center">
                        <span className="font-inter text-display-2 text-brand-gray uppercase">Quantity:</span>
                        <div className="w-full max-w-32.5 h-full flex items-center justify-between border px-4">
                          <button 
                            disabled={item.quantity <= 1}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="font-inter font-light text-display-6 cursor-pointer disabled:opacity-30"
                          >
                            -
                          </button>
                          <span className="font-inter font-semibold text-display-4">{item.quantity}</span>
                          <button 
                            disabled={item.quantity >= maxStock}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="font-inter font-light text-display-6 cursor-pointer disabled:opacity-30"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="w-full flex justify-between">
                        <span className="font-inter text-display-2 text-brand-gray uppercase">Subtotal:</span>
                        <span className="font-inter text-display-2 text-[#c69b7b]">${itemSubtotal.toFixed(2)}</span>
                      </div>
                    </div>

          
                    <div className="w-full hidden md:grid md:grid-cols-[50px_120px_1fr_100px_130px_100px] gap-2.5 items-center py-5 pr-12.5">
                      <div className="w-full flex justify-center">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="w-4 h-4 cursor-pointer hover:opacity-70 transition-opacity"
                        >
                          <img src={Closeicon} alt="Close" className="w-full h-full object-contain" />
                        </button>
                      </div>
                      
                      <div className="w-full flex justify-center">
                        <ImageWithLoader
                          src={item.thumbnail || item.image}
                          alt={item.title}
                          className="w-30 h-35.25 bg-[#F3F4F6]"
                          imgClassName="w-full h-full object-contain"
                        />
                      </div>
                      
                      <span className="font-inter text-display-2 font-semibold uppercase text-center">
                        {item.title}
                      </span>
                      
                      <span className="font-inter text-display-2 font-semibold uppercase text-center ">
                        ${item.price.toFixed(2)}
                      </span>
                      
                      <div className="w-full flex justify-center">
                        <div className="w-full max-w-25 h-10 flex items-center justify-between border px-3">
                          <button 
                            disabled={item.quantity <= 1}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="font-inter font-light text-lg cursor-pointer hover:text-gray-500 disabled:opacity-30"
                          >
                            -
                          </button>
                          <span className="font-inter font-semibold text-display-4">{item.quantity}</span>
                          <button 
                            disabled={item.quantity >= maxStock}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="font-inter font-light text-lg cursor-pointer hover:text-gray-500 disabled:opacity-30"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      <span className="font-inter text-display-2 font-semibold uppercase text-center text-[#c69b7b]">
                        ${itemSubtotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="w-full max-w-full h-41 md:h-10.25 flex flex-col md:flex-row md:justify-between gap-2.5">
          <div className="w-full md:max-w-95.5 h-26.5 md:h-full flex flex-col md:flex-row gap-2.5">
            <input type="text" name="text" placeholder="Coupon code" id="text" className=" w-full md:max-w-51.5 h-full border outline-0 pl-4" />
            <button className="w-full md:max-w-41.5 h-full flex items-center justify-center font-inter text-display-2 bg-brand-gray text-white hover:bg-white hover:border hover:text-brand-gray transition-all cursor-pointer">
              Apply Coupon
            </button>
          </div>
          <button 
            onClick={handleUpdateCart}
            className="w-full md:max-w-54.75 h-12 md:h-full flex items-center justify-center font-inter text-display-2 bg-brand-gray text-white hover:bg-white hover:border hover:text-brand-gray transition-all cursor-pointer"
          >
            Update cart
          </button>
        </div>

        <div className="w-full flex justify-center md:justify-end">
          <div className="w-full md:max-w-135 h-auto flex flex-col bg-brand-gray py-10 px-12.5 gap-10">
            <div className="w-full">
              <span className="font-inter font-semibold text-display-5 text-white">Cart totals</span>
            </div>
            
            <div className="w-full h-auto gap-5 flex flex-col justify-between font-inter text-white ">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
            
            <button 
              disabled={cart.length === 0}
              onClick={() => navigate("/checkout")} 
              className="w-full h-12 flex items-center justify-center font-inter text-display-2 text-white border border-white cursor-pointer hover:bg-white hover:text-black transition-all uppercase font-semibold disabled:opacity-50 disabled:hover:bg-brand-gray disabled:hover:text-white disabled:cursor-not-allowed"
            >
              <span>Proceed to checkout</span>
            </button>
          </div>
        </div>

      </div>

      <PopupMessage 
        message={localPopup} 
        onClose={() => setLocalPopup("")} 
      />

    </div>
  );
}

export default CartUi;