import { useState, useEffect } from "react";

function UseProductsState() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeCategory, setActiveCategory] = useState("showall");
  const [activePrice, setActivePrice] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const [sortOrder, setSortOrder] = useState("default");


  const fetchProducts = () => {
    setLoading(true);
    setError(null);

    fetch('https://dummyjson.com/products?limit=200')
      .then(res => {
        if (!res.ok) throw new Error("The data could not be fetched");
        return res.json();
      })
      .then(data => {
        setProducts(data.products); 
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "showall" || product.category === activeCategory;
    const matchesPrice = activePrice === "all" || product.price <= activePrice;
    const searchitem = searchQuery.toLowerCase();
    
    const matchesSearch = 
      product.title.toLowerCase().includes(searchitem) || 
      product.category.toLowerCase().includes(searchitem);
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const sortedAndFilteredProducts = sortOrder === "default" 
    ? filteredProducts 
    : [...filteredProducts].sort((a, b) => {
        if (sortOrder === "asc") return a.title.localeCompare(b.title);
        return b.title.localeCompare(a.title);
      });

  const handleResetFilters = () => {
    setActiveCategory("showall");
    setActivePrice("all");
    setSearchQuery(""); 
    setSortOrder("default");
  };

  return {
    filteredProducts: sortedAndFilteredProducts, 
    loading,
    error,
    activeCategory,
    setActiveCategory,
    activePrice,
    setActivePrice,
    searchQuery,
    setSearchQuery,
    sortOrder,         
    setSortOrder,      
    handleResetFilters,
    fetchProducts
  };
}

export default UseProductsState;