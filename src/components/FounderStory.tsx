const FounderStory = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beige to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal">
                Rooted in Tradition, Crafted with Science
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey began in the pristine valleys of the Himalayas, where our founder discovered 
                the incredible healing power of traditional herbs used by mountain communities for centuries.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                After years of research and building relationships with local farmers, we established 
                O'rovana to bring these pure, potent remedies to modern wellness seekers. Every product 
                represents a bridge between ancient wisdom and contemporary scientific validation.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                We work directly with high-altitude organic farms, ensuring fair trade practices and 
                sustainable harvesting that preserves both the environment and traditional knowledge 
                for future generations.
              </p>
              
              <div className="pt-4">
                <div className="border-l-4 border-forest-green pl-4">
                  <p className="text-charcoal font-semibold italic">
                    "Our mission is to make authentic Himalayan wellness accessible to everyone, 
                    while honoring the communities and traditions that make it possible."
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    - Founder, O'rovana
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1366913/pexels-photo-1366913.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Himalayan landscape with traditional herbs"
                className="rounded-2xl shadow-2xl w-full h-96 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;