import watchweb from "../../assets/homepage assets/watch.webp";
import Perfumeweb from "../../assets/homepage assets/perfume.webp"
import headsetweb from "../../assets/homepage assets/headset.webp"
import shoeweb from "../../assets/homepage assets/shoe.webp"

function FeatureCategory() {
  const FeatureProducts = [
    { id: 1, image: watchweb, name: "Watch" },
    { id: 2, image: Perfumeweb, name: "Perfume" },
    { id: 3, image: headsetweb, name: "headset" },
    { id: 4, image: shoeweb, name: "sneakers" },
    
  ];

  return (
 
    <div className="w-full max-w-360 mx-auto px-fluid-x py-7.5 md:pb-10 md:pt-20 ">
      <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-5 md:gap-6 lg:gap-7.5 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden">
        
        {FeatureProducts.map((product) => (
          <div 
            key={product.id} 
            className="w-64.75 md:w-full shrink-0 flex flex-col gap-5.75 ">
          
            <div className="w-full aspect-square overflow-hidden flex items-center justify-center snap-start group">
              <img 
                src={product.image}
                alt={product.name} 
                className="w-full h-full object-contain rounded group-hover:scale-105 transition-transform duration-300"
              />
            </div>


            <div className="w-full flex justify-center font-inter font-semibold text-display-4 uppercase tracking-wider text-black whitespace-nowrap">
              {product.name}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default FeatureCategory;