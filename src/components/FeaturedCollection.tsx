import { Star, ShoppingCart } from 'lucide-react';

interface FeaturedCollectionProps {
  onProductClick?: () => void;
}

const FeaturedCollection = ({ onProductClick }: FeaturedCollectionProps) => {
  const products = [
    {
      id: 1,
      name: "Himalayan Ashwagandha Powder",
      price: "₹1,299",
      originalPrice: "₹1,599",
      rating: 4.9,
      reviews: 234,
      image: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Pure Tulsi Extract Oil",
      price: "₹899",
      originalPrice: "₹1,199",
      rating: 4.8,
      reviews: 156,
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      badge: "New"
    },
    {
      id: 3,
      name: "Himalayan Glow Face Oil",
      price: "₹1,799",
      originalPrice: "₹2,199",
      rating: 4.9,
      reviews: 189,
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      badge: "Premium"
    },
    {
      id: 4,
      name: "Turmeric Root Powder",
      price: "₹599",
      originalPrice: "₹799",
      rating: 4.7,
      reviews: 298,
      image: "https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      badge: "Organic"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most loved products, sourced directly from the pristine Himalayas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer"
              onClick={onProductClick}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full ${
                  product.badge === 'Best Seller' ? 'bg-terracotta text-white' :
                  product.badge === 'New' ? 'bg-forest-green text-white' :
                  product.badge === 'Premium' ? 'bg-charcoal text-white' :
                  'bg-green-500 text-white'
                }`}>
                  {product.badge}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-charcoal">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </div>

                <button className="w-full bg-forest-green text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <ShoppingCart size={18} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;