import { useState } from "react";
import FilterPanel from "./FilterPanelUI";
import ShoppingProducts from "./ShoppingProductsUI";
import UseProductsState from "./ProductsStateHook/ProductsState";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ShopingGrid() {
  
  const {
    filteredProducts, loading, error,
    activeCategory, setActiveCategory,
    activePrice, setActivePrice,
    searchQuery, setSearchQuery,
    sortOrder, setSortOrder,
    handleResetFilters,
    fetchProducts
  } = UseProductsState();
  
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="w-full max-w-360 mx-auto px-fluid-x py-5 flex flex-col gap-12.5">
      
      <div className="w-full max-w-59 h-5 flex gap-2">
        <Link to="/" className="font-inter text-display-2 font-light text-[#6D7585] hover:text-black">Home</Link>
          <p className="font-inter text-display-2 text-[#6D7585]">/</p>
         <Link to="/shop" className="font-inter text-display-2 font-light text-[#6D7585] hover:text-black">Shop</Link>
      </div>

      <div className="w-full max-w-277.5 grid lg:grid-cols-[258px_1fr] gap-5.75 relative bg-white">
        
        <FilterPanel 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activePrice={activePrice}
          setActivePrice={setActivePrice}
          searchQuery={searchQuery}        
          setSearchQuery={setSearchQuery} 
          totalItems={filteredProducts.length}
          className="hidden lg:block w-full max-w-64.5 pr-5 h-fit pb-5" 
        />
        
        <ShoppingProducts 
          products={filteredProducts} 
          loading={loading} 
          error={error} 
          onResetFilters={handleResetFilters}
          onOpenFilter={() => setIsMobileFilterOpen(true)}
          sortOrder={sortOrder}      
          setSortOrder={setSortOrder} 
          onRetry={fetchProducts}
        />
      </div>

      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden bg-black/40 backdrop-blur-sm justify-end transition-all">
          <div className="w-4/5 max-w-[320px] h-full bg-white p-6 shadow-2xl overflow-y-auto flex flex-col relative animate-slide-in-right">
            
            <div className="flex justify-between items-center mb-6">
              <span className="font-inter font-bold text-xl">Filters</span>
              <button 
                onClick={() => setIsMobileFilterOpen(false)}
                className="text-2xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <FilterPanel 
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activePrice={activePrice}
              setActivePrice={setActivePrice}
              searchQuery={searchQuery}        
              setSearchQuery={setSearchQuery} 
              totalItems={filteredProducts.length}
              className="w-full block" 
            />

            <button 
              onClick={() => setIsMobileFilterOpen(false)}
              className="mt-8 mb-4 px-8 py-3 bg-black text-white rounded font-inter font-medium w-full cursor-pointer hover:bg-gray-800 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default ShopingGrid;