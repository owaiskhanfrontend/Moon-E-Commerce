import { Link } from 'react-router-dom';
import IphoneImg from '../../assets/homepage assets/mobileimg.webp';

function Hero() {
  return (
    <div className="w-full bg-brand-dark">
      
      <div className="w-full max-w-360 mx-auto px-fluid-x flex flex-col md:flex-row items-center justify-center md:justify-between h-auto lg:min-h-158 pt-22 md:py-0 gap-12 md:gap-2 lg:gap-0">
        
        <div className="w-full md:max-w-178.5 flex flex-col items-center text-center md:items-start md:text-left md:gap-6 h-auto">
          
          <p className="font-inter font-semibold text-display-6 text-[#909090]">
            Pro.Beyond.
          </p>
          
          <h1 className="font-inter font-thin text-display-12 text-white leading-tight">
            iPhone 17 <span className="font-semibold">Pro</span>
          </h1>
          
          <p className="font-inter text-paragraph-lg font-medium text-[#909090] pb-8 md:pb-0">
           Created to change everything for the better. For everyone
          </p>
          <Link 
          to="/shop" 
          className="w-full max-w-47.75 h-14 flex justify-center items-center border border-white rounded font-inter text-display-3 font-medium text-white hover:bg-white hover:text-black transition-all cursor-pointer"
          >
          Shop Now
          </Link>
        </div>
        <div className="w-full max-w-85.75 h-72.25 md:max-w-101.5 md:h-auto flex justify-center">
          <img 
            src={IphoneImg} 
            alt="iPhone 17 Pro" 
            className="w-full h-full md:h-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;