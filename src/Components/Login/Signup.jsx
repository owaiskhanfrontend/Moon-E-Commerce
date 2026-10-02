import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoIcon from "../../assets/shared assets/Icon.svg";
import M from "../../assets/shared assets/Vector.svg";
import O1 from "../../assets/shared assets/Vector (1).svg";
import O2 from "../../assets/shared assets/Vector (2).svg";
import N from "../../assets/shared assets/Vector (3).svg";

function Signup() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleClose = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleSuccessRedirect = () => {
    setShowSuccess(false);
    navigate("/");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-fadeIn">
      
   
      <div className="absolute inset-0" onClick={handleClose} />

   
      <div className="relative w-full max-w-md bg-white rounded-sm shadow-2xl border border-gray-100 p-6 md:p-8 flex flex-col gap-6 z-10">
        
    
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black font-light text-2xl transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

     
        <div className="flex flex-col items-center gap-2 pt-2">
          <div className="flex items-center justify-center gap-2">
            <img src={LogoIcon} alt="Moon Logo" className="h-7 w-auto object-contain" />
            <div className="flex items-center gap-1 h-5">
              <img src={M} alt="M" className="h-3.5 object-contain" />
              <img src={O1} alt="O" className="h-3.5 object-contain" />
              <img src={O2} alt="O" className="h-3.5 object-contain" />
              <img src={N} alt="N" className="h-3.5 object-contain" />
            </div>
          </div>
          <span className="font-inter text-xs text-[#6D7585] tracking-widest uppercase">
            E-Commerce Store
          </span>
        </div>

     
        {showSuccess ? (
          <div className="flex flex-col items-center text-center gap-5 py-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-brand-gray text-white flex items-center justify-center text-2xl font-bold">
              ✓
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="font-inter font-bold text-xl text-black">
                You are now logged in
              </h2>
              <p className="font-inter text-xs text-[#6D7585]">
                {isLogin
                  ? "Welcome back! You have successfully signed into your account."
                  : "Your account was created successfully! You are now logged in."}
              </p>
            </div>

            <button
              onClick={handleSuccessRedirect}
              className="w-full h-12 mt-2 bg-brand-gray text-white font-inter font-semibold text-sm uppercase tracking-wider hover:bg-black transition-colors cursor-pointer rounded-sm"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
     
          <>
            <div className="w-full bg-[#F3F4F6] border border-gray-200 rounded-sm p-3.5 text-center flex flex-col gap-1">
              <p className="font-inter font-medium text-xs text-black">
                You are currently browsing as a <span className="underline decoration-[#c69b7b] font-semibold">Guest</span>
              </p>
              <p className="font-inter text-[11px] text-[#6D7585]">
                Sign up or log in to sync your cart, wishlist, and orders.
              </p>
            </div>

            <div className="w-full flex border-b border-gray-200">
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`flex-1 pb-2.5 font-inter text-sm font-semibold transition-all cursor-pointer ${
                  !isLogin
                    ? "text-black border-b-2 border-brand-gray"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`flex-1 pb-2.5 font-inter text-sm font-semibold transition-all cursor-pointer ${
                  isLogin
                    ? "text-black border-b-2 border-brand-gray"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Log In
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {!isLogin && (
                <div className="flex flex-col gap-1">
                  <label className="font-inter text-xs text-gray-600 font-medium">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Owais Khan"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full h-11 border border-gray-300 px-3.5 font-inter text-sm focus:outline-none focus:border-black transition-colors rounded-sm"
                  />
                </div>
              )}

              <div className="flex flex-col gap-1">
                <label className="font-inter text-xs text-gray-600 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-11 border border-gray-300 px-3.5 font-inter text-sm focus:outline-none focus:border-black transition-colors rounded-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-inter text-xs text-gray-600 font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full h-11 border border-gray-300 px-3.5 font-inter text-sm focus:outline-none focus:border-black transition-colors rounded-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 mt-2 bg-brand-gray text-white font-inter font-semibold text-sm uppercase tracking-wider hover:bg-black transition-colors cursor-pointer rounded-sm"
              >
                {isLogin ? "Log In" : "Create Account"}
              </button>
            </form>

            <div className="w-full text-center border-t border-gray-100 pt-3">
              <button
                type="button"
                onClick={handleClose}
                className="font-inter text-xs text-[#6D7585] hover:text-black transition-colors cursor-pointer"
              >
                Continue browsing as Guest →
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Signup;