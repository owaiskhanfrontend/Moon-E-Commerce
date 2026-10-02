import { useEffect } from "react";
import fullSceneRender from "../../assets/aboutpage assets/desktopbg1.webp";
import Mobilebg from "../../assets/aboutpage assets/mobilebg2.webp";

function About() {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="w-full min-h-screen md:h-auto md:min-h-158 relative overflow-hidden flex flex-col justify-center">
      
    
      <div className="absolute inset-0 w-full h-full">
 
        <img 
          src={fullSceneRender} 
          alt="3D React Build Desktop" 
          className="hidden md:block w-full h-full object-cover object-[85%_bottom] md:object-bottom-right 2xl:object-bottom z-0"
        />
        
        <img 
          src={Mobilebg} 
          alt="3D React Build Mobile" 
          className="block md:hidden w-full h-full object-cover object-bottom z-0"
        />
      </div>

      <div className="relative z-10 w-full max-w-360 mx-auto px-fluid-x flex flex-col items-center md:items-start md:justify-center pt-20 pb-100 md:py-0 min-h-[inherit]">
        
        <div className="w-full md:max-w-210 flex flex-col items-center text-center md:items-start md:text-left gap-6 px-4 pt-4 pb-4 md:p-8  rounded-2xl bg-brand-dark/60 md:bg-brand-dark/50 backdrop-blur-none  border border-white/10 shadow-2xl">
          
          <p className="font-inter font-semibold text-display-6 text-[#909090] tracking-wide">
            Case Study.
          </p>
          
          <h1 className="font-inter font-thin text-display-12 text-white leading-tight">
            About <span className="font-semibold">The Build</span>
          </h1>
          
          <p className="font-inter text-paragraph-lg font-medium text-[#c4c4c4] text-shadow-sm max-w-140">
            Built to demonstrate advanced React state management, dynamic JSON API integration , responsive , and high-performance web rendering using custom, Blender 3D skills.
          </p>
          <div className="w-full md:max-w-101 h-auto flex flex-col md:flex-row gap-4 md:gap-8">
              <a 
              href="https://github.com/owaiskhanfrontend?tab=repositories" 
              target="_blank" 
              rel="noreferrer" 
               className=" w-full md:max-w-47.75 h-14 flex justify-center items-center border font-inter text-display-3 font-medium border-white rounded text-white hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all cursor-pointer"
                >
            View Source
          </a>
              <a 
              href="https://www.figma.com/design/OA5JQHlCktJlOEFDCD6mou/Moon-Ceramic---Furniture-Store-ECommerce-Website-Shop--Community-?node-id=0-1&p=f&t=vHgT4oAwhaT6UQo8-0" 
              target="_blank" 
              rel="noreferrer" 
               className=" w-full md:max-w-47.75 h-14 flex justify-center items-center border font-inter text-display-3 font-medium border-white rounded text-white hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all cursor-pointer"
                >
            View Figma Design
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;