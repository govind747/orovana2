import { Shield, Award, Truck, Leaf } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "FSSAI Registered",
      description: "Certified food safety standards compliance"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "AYUSH Certified",
      description: "Traditional Ayurvedic authenticity verified"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Farm to Bottle",
      description: "Direct sourcing ensures maximum potency"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Natural",
      description: "No artificial additives or preservatives"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Why Choose O'rovana
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trust in our commitment to quality, authenticity, and your wellness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl hover:bg-beige transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-green text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;