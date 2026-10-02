import { Link } from "react-router-dom";
import LogoIcon from "../../../assets/shared assets/Icon.svg"
import M from "../../../assets/shared assets/Vector.svg";
import O1 from "../../../assets/shared assets/Vector (1).svg";
import O2 from "../../../assets/shared assets/Vector (2).svg";
import N from "../../../assets/shared assets/Vector (3).svg";

function Footer() {
  const letterVectors = [
    { src: M, alt: "M", width: "w-[21.8px]" },
    { src: O1, alt: "O", width: "w-[19.8px]" },
    { src: O2, alt: "O", width: "w-[20.8px]" },
    { src: N, alt: "N", width: "w-[20.8px]" },
  ];

  return (
    <footer className="w-full bg-brand-gray text-white pt-15 pb-7.5">
      <div className="w-full max-w-360 mx-auto px-fluid-x flex flex-col">
        
        <div className="flex flex-col lg:flex-row w-full pb-10 lg:pb-15">
          
          <div className="w-full lg:w-[40%] flex flex-col items-start gap-6 border-b border-white/20 lg:border-b-0 lg:border-r pb-10 lg:pb-0 lg:pr-15 mb-10 lg:mb-0">
            
            <div className="flex items-center gap-2.5 brightness-0 invert">
              <img src={LogoIcon} alt="Moon Logo" className="w-10 h-9.5 object-contain" />
              <div className="flex gap-0.75 h-5 items-end">
                {letterVectors.map((letter, index) => (
                  <img key={index} src={letter.src} alt={letter.alt} className={`${letter.width} h-full object-contain`} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-inter text-[15px] font-light leading-6.5 opacity-80 max-w-[320px]">
                Designed and built using React.js and Tailwind CSS. A high-performance e-commerce portfolio project demonstrating scalable API-driven state management and fluid responsive design, implemented from Figma.
              </p>
              
              <p className="font-inter text-[13px] font-light leading-5.5 text-amber-400/90 max-w-85">
                <strong>Behind the Scenes:</strong> I documented the entire journey of building this project from day one. Every line of code, Blender render, and UI decision was recorded with voiceovers to share my front-end problem-solving process. Watch it on my <a href="https://www.youtube.com/@OwaisKhanFrontEnd-dev" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors">YouTube Channel</a>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <a href="https://github.com/owaiskhanfrontend?tab=repositories" target="_blank" rel="noreferrer" className="h-11 px-6 border border-white text-[13px] font-inter font-semibold uppercase tracking-widest hover:bg-white hover:text-[#2C2D35] transition-colors flex items-center gap-2 ">
                View Source Code <span>→</span>
              </a>

              
              <a href="https://www.figma.com/design/OA5JQHlCktJlOEFDCD6mou/Moon-Ceramic---Furniture-Store-ECommerce-Website-Shop--Community-?node-id=0-1&p=f&t=vHgT4oAwhaT6UQo8-0" target="_blank" rel="noreferrer" className="h-11 px-6 border border-white text-[13px] font-inter font-semibold uppercase tracking-widest hover:bg-white hover:text-[#2C2D35] transition-colors flex items-center gap-2">
                View Figma Design <span>→</span>
              </a>
            </div>

          </div>

          <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-5 lg:pl-20">
            
            <div className="flex flex-col gap-6">
              <h3 className="font-inter font-semibold text-display-2 uppercase tracking-widest">Connect</h3>
              <div className="flex flex-col gap-4 font-inter text-display-2 font-light opacity-80">

                <a href="https://www.linkedin.com/in/owais-khan-ab3ab2436/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity w-fit">LinkedIn</a>
                
                <a href="https://github.com/owaiskhanfrontend" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity w-fit">GitHub</a>
                
                <a 
                href="https://wa.me/923158174161" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:opacity-100 transition-opacity w-fit"
                >
                 WhatsApp
              </a>

               <a 
              href="tel:+923183668327" 
              className="hover:opacity-100 transition-opacity w-fit"
              >
              +92 318 3668327
              </a>

                <Link to="/about" className="hover:opacity-100 transition-opacity w-fit">About This Project</Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-inter font-semibold text-display-2 uppercase tracking-widest">Skills</h3>
              <div className="flex flex-col gap-4 font-inter text-display-2 font-light opacity-80">

                <span className="hover:opacity-100 transition-opacity w-fit cursor-default">React.js</span>

                <span className="hover:opacity-100 transition-opacity w-fit cursor-default">Tailwind CSS v4</span>

                <span className="hover:opacity-100 transition-opacity w-fit cursor-default">Responsive UI/UX</span>

                <span className="hover:opacity-100 transition-opacity w-fit cursor-default">State Management</span>

                <span className="hover:opacity-100 transition-opacity w-fit cursor-default">3D Integration (Blender)</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-inter font-semibold text-display-2 uppercase tracking-widest">My Portfolio</h3>
              <div className="flex flex-col gap-4 font-inter text-display-2 font-light opacity-80">
                <button className="hover:opacity-100 transition-opacity w-fit">Moon E-commerce</button>
                
                <a href="https://owaiskhan-weather-dashboard.netlify.app/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity w-fit">Weather Application</a>
             
              </div>
            </div>

          </div>
        </div>

        <div className="w-full border-t border-white/20 pt-6 flex justify-center text-center font-inter text-display-2 font-light opacity-60 ">
          <p>
            Designed & Developed by Owais Khan | 2026
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;