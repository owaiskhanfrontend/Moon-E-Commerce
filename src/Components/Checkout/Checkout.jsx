import { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

import ChevronLeft from "../../assets/../assets/checkout assets/Chevron left.svg";
import Arrowrigth from "../../assets/../assets/checkout assets/Arrow rigth.svg";
import Visaicon from "../../assets/../assets/checkout assets/Visacard.svg";
import atmcardicon from "../../assets/../assets/checkout assets/Atmcard.svg";
import paypalicon from "../../assets/../assets/checkout assets/paypal icon.svg";

function Checkout() {
  const navigate = useNavigate();
  const { cart } = useCart();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "Pakistan",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    orderNotes: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("credit-card");

 
  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shipping = subtotal > 0 ? 15.0 : 0.0;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const fillDemoData = () => {
    setFormData({
      firstName: "Owais",
      lastName: "Khan",
      company: "Frontend Dev",
      country: "Pakistan",
      streetAddress: "Shahrah e Faisal",
      city: "Karachi",
      state: "Sindh",
      zipCode: "75300",
      phone: "+923178803427",
      email: "owaiskhan.frontend@gmail.com",
      orderNotes: "Looking forward to this order!",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    navigate("/about");
  };
  

  return (
    <div className="w-full min-h-screen">
      <div className="w-full max-w-360 h-auto mx-auto px-fluid-x py-5 pb-20 flex flex-col gap-12.5">
        
      
        <div className="w-full flex items-center gap-2">
          <Link to="/cart" className="font-inter text-display-2 font-light text-[#6D7585] hover:text-black">
            Cart
          </Link>
          <p className="font-inter text-display-2 font-light text-[#6D7585]">/</p>
          <Link to="/checkout" className="font-inter text-display-2 font-light text-[#6D7585]">
            Shipping 
          </Link>
          <p className="font-inter text-display-2 font-light text-[#6D7585]">/</p>
          <span className="font-inter text-display-2 font-light cursor-pointer text-black">
            Payment
          </span>
        </div>

      
        <form onSubmit={handleSubmit} className="w-full max-w-277.5 h-auto grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-14">

        
          <div className="w-full lg:max-w-159.5 h-auto bg-white">
            <div className="flex flex-col gap-10">
              <div className="w-full h-7.5 flex justify-between">
                <span className="font-inter font-semibold text-display-5">Billing Details</span>
                <button 
                  type="button" 
                  onClick={fillDemoData} 
                  className="w-full max-w-35 lg:max-w-50 h-full font-inter font-medium text-display-3 rounded  bg-brand-gray text-white hover:bg-white hover:border hover:text-brand-gray transition-all cursor-pointer"
                >
                  Auto-fill Demo
                </button>
              </div>
            
              <div className="w-full h-auto flex flex-col gap-7.5">
                
                <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-5">
                  <div className="w-full lg:w-77.25 flex flex-col gap-3">
                    <label htmlFor="firstName" className="font-inter font-semibold text-display-2">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Samantha" 
                      className="w-full h-13 pl-4 border outline-0 font-inter font-light text-display-2" 
                    />
                  </div>
                  <div className="w-full lg:w-77.25 flex flex-col gap-3">
                    <label htmlFor="lastName" className="font-inter font-semibold text-display-2">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Clarken" 
                      className="w-full h-13 pl-4 border outline-0 font-inter font-light text-display-2" 
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-5">
                  <div className="w-full lg:w-77.25 flex flex-col gap-3">
                    <label htmlFor="company" className="font-inter font-semibold text-display-2">Company</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Moon" 
                      className="w-full h-13 pl-4 border outline-0 font-inter font-light text-display-2" 
                    />
                  </div>
                  <div className="w-full lg:w-77.25 flex flex-col gap-3">
                    <label htmlFor="country" className="font-inter font-semibold text-display-2">Country / Region *</label>
                    <div className="relative w-full h-13">
                      <select 
                        id="country" 
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full h-full pl-4 pr-10 border outline-0 font-inter font-light text-display-2 appearance-none bg-white cursor-pointer text-[#6D7585]"
                      >
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Pakistan">Pakistan</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="#141718" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-3">
                  <label htmlFor="streetAddress" className="font-inter font-semibold text-display-2">Street address *</label>
                  <input 
                    type="text" 
                    id="streetAddress" 
                    name="streetAddress"
                    required
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    placeholder="Address" 
                    className="w-full h-13 pl-4 border outline-0 font-inter font-light text-display-2" 
                  />
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-5">
                  <div className="w-full lg:w-77.25 flex flex-col gap-3">
                    <label htmlFor="city" className="font-inter font-semibold text-display-2">Town / City *</label>
                    <input 
                      type="text" 
                      id="city" 
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City" 
                      className="w-full h-13 pl-4 border outline-0 font-inter font-light text-display-2" 
                    />
                  </div>
                  <div className="w-full lg:w-77.25 flex flex-col gap-3">
                    <label htmlFor="state" className="font-inter font-semibold text-display-2">State *</label>
                    <div className="relative w-full h-13">
                      <select 
                        id="state" 
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full h-full pl-4 pr-10 border outline-0 font-inter font-light text-display-2 appearance-none bg-white cursor-pointer text-[#6D7585]"
                      >
                        <option value="">Select State</option>
                        <option value="US">US</option>
                        <option value="UK">UK</option>
                        <option value="Sindh">Sindh</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="#141718" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-5">
                  <div className="w-full lg:w-77.25 flex flex-col gap-3">
                    <label htmlFor="zipCode" className="font-inter font-semibold text-display-2">ZIP Code</label>
                    <input 
                      type="text" 
                      id="zipCode" 
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="ZIP Code" 
                      className="w-full h-13 pl-4 border outline-0 font-inter font-light text-display-2" 
                    />
                  </div>
                  <div className="w-full lg:w-77.25 flex flex-col gap-3">
                    <label htmlFor="phone" className="font-inter font-semibold text-display-2">Phone *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(123) 456 - 7890" 
                      className="w-full h-13 pl-4 border outline-0 font-inter font-light text-display-2" 
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-3">
                  <label htmlFor="email" className="font-inter font-semibold text-display-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@youremail.com" 
                    className="w-full h-13 pl-4 border outline-0 font-inter font-light text-display-2" 
                  />
                </div>

                <div className="w-full flex flex-col gap-3">
                  <label htmlFor="orderNotes" className="font-inter font-semibold text-display-2">Order notes</label>
                  <div className="w-full h-36 px-4 py-4 border font-inter font-light text-display-2">
                    <textarea 
                      id="orderNotes" 
                      name="orderNotes" 
                      value={formData.orderNotes}
                      onChange={handleInputChange}
                      placeholder="Type your message here..." 
                      className="w-full h-full focus:outline-none resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-6 lg:gap-3 items-center">
                <button 
                  type="button"
                  onClick={() => navigate("/cart")}
                  className="w-full lg:max-w-36.25 h-5 flex justify-between cursor-pointer"
                >
                  <div className="w-full max-w-5 h-full">
                    <img src={ChevronLeft} alt="Chevron left" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-inter font-semibold text-display-2 uppercase">Return to cart</span>
                </button>
                <button 
                  type="submit" 
                  className="w-full lg:max-w-76 h-12 bg-brand-gray flex items-center justify-center font-inter text-display-1 text-white uppercase cursor-pointer gap-1"
                >
                  Continue to shipping
                  <span className="w-full max-w-3 h-3 ml-2">
                    <img src={Arrowrigth} alt="Arrow right" className="w-full h-full object-contain" />
                  </span>
                </button>
              </div>
            </div>
          </div>

       
          <div className="w-full lg:max-w-104 h-auto bg-white flex flex-col gap-12">
            <div className="w-full h-auto flex flex-col gap-10">
            
              <div className="w-full h-8.75 flex justify-between border-b border-gray-200">
                <span className="font-inter font-semibold text-display-5">Product</span>
                <span className="font-inter font-semibold text-display-5">Subtotal</span>
              </div>
              
            
              <div className="w-full h-auto flex flex-col gap-5">
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div key={index} className="w-full flex justify-between font-inter font-light text-display-2">
                      <span className="truncate pr-2">
                        {item.title || item.name} <span className="text-gray-400 text-sm">x{item.quantity || 1}</span>
                      </span>
                      <span>${((item.price) * (item.quantity || 1)).toFixed(2)}</span>
                    </div>
                  ))
                ) : (
                  <div className="w-full text-center font-inter font-light text-display-2 text-gray-400">
                    Your cart is empty
                  </div>
                )}
              </div>

              <div className="w-full h-auto flex flex-col gap-5">
                <div className="w-full flex justify-between font-inter font-bold text-display-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="w-full flex justify-between font-inter font-bold text-display-2">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
              </div>

              <div className="w-full h-8.75 flex flex-col justify-end border-t border-gray-200 pt-5">
                <div className="w-full flex justify-between">
                  <span className="font-inter font-semibold text-display-5">Total</span>
                  <span className="font-inter font-semibold text-display-5">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="w-full h-auto bg-brand-gray flex flex-col py-7.5 px-7.5 gap-5 rounded-sm">
              <span className="w-full font-inter font-semibold text-display-5 text-white">Payment</span>
              
              <div className="w-full h-16 flex items-center justify-between border-b border-white/30">
                <div className="w-full max-w-26.5 flex items-center gap-3 text-white">
                  <input 
                    type="radio" 
                    id="creditCard" 
                    name="paymentMethod" 
                    value="credit-card"
                    checked={paymentMethod === "credit-card"}
                    onChange={() => setPaymentMethod("credit-card")}
                    className="w-5 h-5 cursor-pointer accent-white" 
                  />
                  <label htmlFor="creditCard" className="font-inter font-light text-display-2 cursor-pointer">Credit card</label>
                </div>
                <div className="w-full max-w-21.5 h-auto flex justify-between">
                  <div className="w-full max-w-9.5 h-6">
                    <img src={Visaicon} alt="Visa card icon" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-full max-w-9.5 h-6">
                    <img src={atmcardicon} alt="Mastercard icon" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

          
              {paymentMethod === "credit-card" && (
                <div className="w-full h-auto flex flex-col gap-5 transition-all">
                  <input type="text" placeholder="Card number" className="w-full h-10.5 bg-transparent border-white border outline-0 px-3 font-inter font-light text-display-2 text-white placeholder-gray-300" />
                  <input type="text" placeholder="Name on card" className="w-full h-10.5 bg-transparent border-white border outline-0 px-3 font-inter font-light text-display-2 text-white placeholder-gray-300" />
                  <div className="w-full flex flex-col lg:flex-row gap-5">
                    <input type="text" placeholder="Expiration date (MM/YY)" className="w-full lg:max-w-42 h-10.5 bg-transparent border-white border outline-0 px-3 font-inter font-light text-display-2 text-white placeholder-gray-300" />
                    <input type="text" placeholder="Security code" className="w-full lg:max-w-42 h-10.5 bg-transparent border-white border outline-0 px-3 font-inter font-light text-display-2 text-white placeholder-gray-300" />
                  </div>
                </div>
              )}

              <div className="w-full h-16 flex items-center border-t border-white/30 mt-2">
                <div className="w-full max-w-32 gap-3 flex items-center">
                  <input 
                    type="radio" 
                    id="paypal" 
                    name="paymentMethod" 
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="w-5 h-5 cursor-pointer accent-white" 
                  />
                  <label htmlFor="paypal" className="w-full max-w-24 h-6 cursor-pointer">
                    <img src={paypalicon} alt="PayPal icon" className="w-full h-full object-contain" />
                  </label>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full h-12 flex items-center justify-center border border-white hover:bg-white hover:text-brand-gray transition-colors font-inter font-semibold text-display-2 uppercase text-white cursor-pointer rounded-sm mt-2"
              >
                Place order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;