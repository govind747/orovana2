const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-beige to-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-charcoal mb-6 leading-tight">
            Nature's Wisdom.<br />
            <span className="text-forest-green">Scientific Craft.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the ancient healing power of the Himalayas through our premium collection of raw herbs, 
            cold-pressed oils, and Ayurvedic blends. Direct from farm to bottle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-forest-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Shop Now
            </button>
            <button className="border-2 border-forest-green text-forest-green px-8 py-4 rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-all duration-300">
              Explore Ingredients
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-forest-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-forest-green rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;