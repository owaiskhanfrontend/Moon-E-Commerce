import { useState, useEffect } from "react";
import ProductCard from "../Share/UI/ProductUI";
import OfflineErrorState from "../Common/OfflineErrorState";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = () => {
    setIsLoading(true);
    setError(null);

    fetch('https://dummyjson.com/products/category/smartphones')
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch products data.");
        return res.json();
      })
      .then(data => {
        setProducts(data.products.slice(0, 8)); 
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full max-w-360 mx-auto px-fluid-x h-auto py-7.5 md:pt-10 md:pb-20 flex flex-col gap-12">
      
      <div className="w-full flex justify-center">
        <div className="w-full max-w-97.75 h-9 flex justify-center">
          <p className="font-garamond font-bold text-display-7 uppercase">Best Sellers</p>
        </div>
      </div>

      {isLoading && (
        <div className="w-full flex justify-center items-center min-h-100 gap-3">
          <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
          <p className="font-inter text-display-4">Loading products...</p>
        </div>
      )}

      {error && (
        <OfflineErrorState onRetry={fetchProducts} />
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2.5 md:gap-x-7.5 gap-y-7.5 justify-items-center">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
      )}  
      
    </div>
  );
}

export default FeaturedProducts;