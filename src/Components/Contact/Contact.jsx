import Foldericon from '../../assets/contactpage assets/foldericon.webp';

function Contact() {
  return (
    <div className="w-full bg-brand-dark">
      
      <div className="w-full max-w-360 mx-auto px-fluid-x flex flex-col md:flex-row items-center justify-center md:justify-between h-auto md:min-h-158 pt-22 md:py-0 gap-12 md:gap-2 lg:gap-0">
        
        <div className="w-full md:max-w-178.5 flex flex-col items-center text-center md:items-start md:text-left md:gap-6 h-auto">
          
          <p className="font-inter font-semibold text-display-6 text-[#909090]">
            Progress.
          </p>
          
          <h1 className="font-inter font-thin text-display-11 md:text-display-12 text-white leading-tight">
            My <span className="font-semibold">Projects</span>
          </h1>
          
          <p className="font-inter text-paragraph-lg font-medium text-[#909090] pb-8 md:pb-0">
           Connect with me.
          </p>
          
              <a 
              href="https://www.linkedin.com/in/owais-khan-ab3ab2436/" 
              target="_blank" 
              rel="noreferrer" 
               className=" w-full max-w-47.75 h-14 flex justify-center items-center border font-inter text-display-3 font-medium border-white rounded text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                >
            View linkedin
          </a>
        </div>

    
        <div className="w-full max-w-85.75 h-72.25 lg:max-w-115 md:h-auto flex justify-center">
          <img 
            src={Foldericon} 
            alt="Folder icon" 
            className="w-full h-full md:h-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
}

export default Contact;