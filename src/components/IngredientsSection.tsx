import { Leaf, Droplets, Zap, Heart } from 'lucide-react';

const IngredientsSection = () => {
  const ingredients = [
    {
      icon: <Leaf className="w-8 h-8" />,
      name: "Himalayan Ashwagandha",
      description: "Reduces stress and boosts immunity naturally",
      color: "text-green-600"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      name: "Cold-Pressed Oils",
      description: "Retains maximum nutrients and healing properties",
      color: "text-blue-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: "Sacred Tulsi",
      description: "Enhances respiratory health and mental clarity",
      color: "text-purple-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      name: "Turmeric Root",
      description: "Powerful anti-inflammatory and antioxidant benefits",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Pure Himalayan Ingredients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each ingredient is carefully sourced from high-altitude regions of the Himalayas, 
            where pristine conditions create the most potent healing compounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300 ${ingredient.color}`}>
                {ingredient.icon}
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3 font-playfair">
                {ingredient.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;