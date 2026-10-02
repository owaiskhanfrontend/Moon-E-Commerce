import SearchIcon from "../../assets/shared assets/Search.svg";
import Line from "../../assets/../assets/shop assets/Line.svg";


function FilterPanel({ activeCategory, setActiveCategory, activePrice, setActivePrice, searchQuery, setSearchQuery, totalItems, className }) {
  const Filters = [
    { id: 1, Category: "showall" }, { id: 2, Category: "beauty" }, 
    { id: 3, Category: "fragrances" },{ id: 4, Category: "furniture" }, 
    { id: 5, Category: "groceries" }, { id: 6, Category: "home-decoration" },
    { id: 7, Category: "kitchen-accessories" }, { id: 8, Category: "laptops" },
    { id: 9, Category: "mens-shirts" },{ id: 10, Category: "mens-shoes" },
    { id: 12, Category: "mens-watches" }, { id: 13, Category: "mobile-accessories" },
    { id: 14, Category: "motorcycle" }, { id: 15, Category: "skin-care" },
    { id: 16, Category: "smartphones" }, { id: 17, Category: "sports-accessories" },
    { id: 18, Category: "sunglasses" }, { id: 19, Category: "tablets" },
    { id: 20, Category: "tops" }, { id: 21, Category: "vehicle" },
    { id: 22, Category: "womens-bags" }, { id: 23, Category: "womens-dresses" },
    { id: 24, Category: "womens-jewellery" }, { id: 25, Category: "womens-shoes" }, 
    { id: 26, Category: "womens-watches" },
  ];

  const Prices = [
    { id: 0, Price: "all" }, 
    { id: 1, Price: 10 }, { id: 2, Price: 50 }, { id: 3, Price: 1000 },
    { id: 4, Price: 5000 }, { id: 5, Price: 50000 }, { id: 6, Price: 100000 },
    { id: 7, Price: 1000000 },
  ];

  return (
    <div className={className}>
      
      <div className="w-full h-5">
        <div className="font-inter font-bold text-display-2 text-black">
          Showing {totalItems} items 
        </div>
      </div>
      
      <div className="w-full h-auto py-7.5">
        <img src={Line} alt="Divider Line" className="w-full h-full object-contain" />
      </div>
      
    
      <div className="w-full h-auto flex flex-col mb-7.5">
        <div className="flex items-center w-full h-11 border border-gray-300 rounded px-3 gap-3 focus-within:border-black transition-colors">
          <img src={SearchIcon} alt="Search icon" className="w-5 h-5 object-contain opacity-50" />
          <input 
            type="text" 
            placeholder="Search products..."
            value={searchQuery}
            onChange={(Search) => setSearchQuery(Search.target.value)}
            className="w-full h-full outline-none font-inter text-sm text-black placeholder-gray-400 bg-transparent"
          />
        </div>
      </div>

      <div className="w-full h-auto flex flex-col gap-5.5">
        <span className="font-inter text-display-2 font-semibold text-black">
          Category
        </span>
        
        <div className="flex flex-col gap-4">
          {Filters.map((filter) => (
            <label key={filter.id} className="flex w-fit items-center gap-3 group">
              <input 
                type="checkbox" 
                className="w-4.5 h-4.5 accent-black cursor-pointer"
                checked={activeCategory === filter.Category} 
                onChange={() => setActiveCategory(filter.Category)} 
              />
              <span className="font-inter font-light uppercase cursor-pointer text-gray-500 hover:text-black transition-colors">
                {filter.Category.replace(/-/g,' ')}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="w-full h-auto py-7.5">
        <img src={Line} alt="Divider Line" className="w-full h-full object-contain" />
      </div>

      <div className="w-full h-auto flex flex-col gap-5.5">
        <span className="font-inter text-display-2 font-semibold text-black">
          Price
        </span>
        
        <div className="flex flex-col gap-4">
          {Prices.map((price) => (
            <label key={price.id} className="flex w-fit items-center gap-3 group">
              <input 
                type="checkbox" 
                className="w-4.5 h-4.5 accent-black cursor-pointer"
                checked={activePrice === price.Price}
                onChange={() => setActivePrice(price.Price)}
              />
              <span className="font-inter font-light uppercase cursor-pointer text-gray-500 hover:text-black transition-colors">
                {price.Price === "all" ? "ANY PRICE" : `UP TO $${price.Price.toLocaleString()}`}
              </span>
            </label>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default FilterPanel;