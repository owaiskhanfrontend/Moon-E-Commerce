import Hero from "./Hero";
import FeatureCategory from "./FeaturedCategory";
import FeaturedProducts from "./FeaturedProducts";


function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <FeatureCategory />
      <FeaturedProducts />
    </div>
  );
}

export default Home;