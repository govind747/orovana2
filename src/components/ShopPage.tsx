import { useState } from 'react';
import { Search, Filter, Grid2x2 as Grid, List, Star, ShoppingCart } from 'lucide-react';

const ShopPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'powders', name: 'Herbal Powders', count: 12 },
    { id: 'oils', name: 'Essential Oils', count: 8 },
    { id: 'blends', name: 'Ayurvedic Blends', count: 4 }
  ];

  const products = [
    {
      id: 1,
      name: "Himalayan Ashwagandha Powder",
      category: "powders",
      price: 1299,
      originalPrice: 1599,
      rating: 4.9,
      reviews: 234,
      image: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      badge: "Best Seller",
      description: "Premium root extract for stress relief and immunity"
    },
    {
      id: 2,
      name: "Pure Tulsi Extract Oil",
      category: "oils",
      price: 899,
      originalPrice: 1199,
      rating: 4.8,
      reviews: 156,
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      badge: "New",
      description: "Cold-pressed sacred basil oil for respiratory health"
    },
    {
      id: 3,
      name: "Himalayan Glow Face Oil",
      category: "oils",
      price: 1799,
      originalPrice: 2199,
      rating: 4.9,
      reviews: 189,
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      badge: "Premium",
      description: "Nourishing blend for radiant, healthy skin"
    },
    {
      id: 4,
      name: "Turmeric Root Powder",
      category: "powders",
      price: 599,
      originalPrice: 799,
      rating: 4.7,
      reviews: 298,
      image: "https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      badge: "Organic",
      description: "Anti-inflammatory golden root powder"
    },
    {
      id: 5,
      name: "Stress Relief Blend",
      category: "blends",
      price: 1499,
      originalPrice: 1899,
      rating: 4.6,
      reviews: 87,
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      badge: "Popular",
      description: "Ayurvedic blend for mental calm and balance"
    },
    {
      id: 6,
      name: "Himalayan Clove Oil",
      category: "oils",
      price: 799,
      originalPrice: 999,
      rating: 4.8,
      reviews: 145,
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      badge: "Pure",
      description: "Antimicrobial essential oil for oral health"
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-beige py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            Shop Himalayan Wellness
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our complete collection of premium herbs, oils, and Ayurvedic blends 
            sourced directly from the pristine Himalayas.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-charcoal mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-forest-green text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm opacity-75">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-charcoal mb-4">Price Range</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">₹{priceRange[0]}</span>
                  <span className="text-sm text-gray-600">₹{priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>

            <div className="lg:hidden">
              <button className="w-full bg-forest-green text-white py-2 px-4 rounded-lg font-semibold">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Search and Sort Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>

                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-forest-green text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-forest-green text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {sortedProducts.length} of {products.length} products
              </p>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product) => (
                <div 
                  key={product.id} 
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className={`object-cover ${viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'}`}
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

                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                    <div>
                      <h3 className="text-lg font-semibold text-charcoal mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      {viewMode === 'list' && (
                        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                      )}

                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-charcoal">₹{product.price}</span>
                          <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-forest-green text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors flex items-center justify-center space-x-2">
                      <ShoppingCart size={18} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;