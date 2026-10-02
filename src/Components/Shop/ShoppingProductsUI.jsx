import { useState } from "react";
import DownarrowIcon from "../../assets/../assets/shop assets/down arrow.svg";
import FilterIcon from "../../assets/../assets/shop assets/Filters.svg";
import ProductCard from "../Share/UI/ProductUI";
import OfflineErrorState from "../Common/OfflineErrorState";

function ShoppingProducts({ products, loading, error, onResetFilters, onOpenFilter, sortOrder, setSortOrder, onRetry }) {
  
  const [isSortOpen, setIsSortOpen] = useState(false);

  const getSortLabel = () => {
    if (sortOrder === "asc") return "Name (A-Z)";
    if (sortOrder === "desc") return "Name (Z-A)";
    return "Default";
  };

  const handleSelectSort = (order) => {
    setSortOrder(order);
    setIsSortOpen(false); 
  };

  return (
    <div className="w-full h-auto">
      <div className="flex flex-col gap-7.5">
        
        <div className="w-full h-5 flex justify-between lg:justify-end items-center">
       
          <div 
            className="flex lg:hidden items-center w-full max-w-18 justify-between cursor-pointer"
            onClick={onOpenFilter}
          >
            <div className="max-w-5 h-full flex items-center">
              <img src={FilterIcon} alt="Filter icon" className="w-full h-full object-contain" />
            </div>
            <div className="font-inter font-semibold text-display-2">Filter</div>
          </div>
          
          <div className="relative flex items-center justify-between w-full max-w-48 lg:max-w-56 h-full select-none z-20">
            
            <div 
              className="flex items-center justify-between w-full cursor-pointer"
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              <div className="font-inter text-sm">
                Sort By: <span className="text-[#6D7585]">{getSortLabel()}</span>
              </div>
              <div className={`w-3.5 h-3.5 transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""}`}>
                <img src={DownarrowIcon} alt="Sort Arrow" className="w-full h-full object-contain" />
              </div>
            </div>

            {isSortOpen && (
              <div className="absolute top-full right-0 mt-3 w-40 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg overflow-hidden flex flex-col">
                <div 
                  onClick={() => handleSelectSort("default")}
                  className={`px-4 py-3 text-sm font-inter cursor-pointer transition-colors ${sortOrder === "default" ? "bg-gray-50 font-medium" : "hover:bg-gray-50"}`}
                >
                  Default
                </div>
                <div 
                  onClick={() => handleSelectSort("asc")}
                  className={`px-4 py-3 text-sm font-inter cursor-pointer transition-colors ${sortOrder === "asc" ? "bg-gray-50 font-medium" : "hover:bg-gray-50"}`}
                >
                  Name (A to Z)
                </div>
                <div 
                  onClick={() => handleSelectSort("desc")}
                  className={`px-4 py-3 text-sm font-inter cursor-pointer transition-colors ${sortOrder === "desc" ? "bg-gray-50 font-medium" : "hover:bg-gray-50"}`}
                >
                  Name (Z to A)
                </div>
              </div>
            )}

          </div>
        </div>

       {loading ? (
          <div className="w-full h-75 flex items-center justify-center gap-3 font-inter text-gray-500">
            <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            Loading products...
          </div>
          
        ) : error ? (
          <OfflineErrorState 
            onRetry={onRetry}
          />
        ) : products.length === 0 ? (
          <div className="w-full h-75 px-2 flex flex-col justify-center items-center text-center gap-4 border border-gray-300">
            <div className="flex flex-col gap-2">
              <p className="font-inter font-bold text-lg text-black">
                The current item is unavailable at the moment.
              </p>
              <p className="font-inter text-sm text-gray-500">
                Please select a new filter option or clear your Search and filters.
              </p>
            </div>
            
            <button 
              onClick={onResetFilters} 
              className="px-8 py-3 border bg-brand-gray border-brand-dark rounded font-inter text-display-3 font-medium text-white hover:bg-white hover:text-black transition-all w-fit cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-2.5 md:gap-x-7.5 gap-y-10">
           {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default ShoppingProducts;