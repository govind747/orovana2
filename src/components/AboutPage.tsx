import { Leaf, Users, Award, Heart, Mountain, Truck, Shield, Star } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Purity First",
      description: "Every product is sourced from certified organic farms in the pristine Himalayas, ensuring maximum potency and zero contamination."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Partnership",
      description: "We work directly with local farmers, ensuring fair trade practices and supporting traditional knowledge systems."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Scientific Validation",
      description: "Ancient wisdom meets modern science. Every product undergoes rigorous testing for quality, purity, and efficacy."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Holistic Wellness",
      description: "We believe in nurturing complete well-being through the harmonious balance of mind, body, and spirit."
    }
  ];

  const milestones = [
    { year: "2019", title: "Founded", description: "Started with a vision to bring authentic Himalayan wellness to modern lives" },
    { year: "2020", title: "First Harvest", description: "Established partnerships with 50+ organic farmers across Himachal Pradesh" },
    { year: "2021", title: "FSSAI Certified", description: "Achieved food safety certification and launched our first product line" },
    { year: "2022", title: "10,000+ Customers", description: "Reached our first major milestone of satisfied wellness seekers" },
    { year: "2023", title: "Expansion", description: "Extended sourcing to Uttarakhand and launched premium oil collection" },
    { year: "2024", title: "Innovation", description: "Introduced cold-processing technology and launched Ayurvedic blends" }
  ];

  const team = [
    {
      name: "Arjun Sharma",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Former pharmaceutical researcher turned wellness entrepreneur, passionate about bridging ancient wisdom with modern science."
    },
    {
      name: "Dr. Priya Nair",
      role: "Head of Quality",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Ayurvedic doctor and botanist with 15+ years of experience in herbal medicine and quality assurance."
    },
    {
      name: "Rajesh Kumar",
      role: "Sourcing Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Born in the Himalayas, Rajesh has deep connections with local farming communities and ensures ethical sourcing practices."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-beige to-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6">
            Rooted in Tradition.<br />
            <span className="text-forest-green">Refined for Today.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O'rovana was born from a simple belief: the ancient healing wisdom of the Himalayas 
            deserves a place in modern wellness. We bridge centuries-old traditions with 
            contemporary scientific validation to bring you the purest, most potent herbal products.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-6">
                Our Journey Began in the Mountains
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In 2019, our founder Arjun Sharma embarked on a transformative journey through 
                  the remote villages of Himachal Pradesh. What he discovered was a treasure trove 
                  of botanical wisdom that had been carefully preserved by mountain communities for generations.
                </p>
                <p>
                  Witnessing the incredible healing properties of herbs grown at high altitudes, 
                  where pristine air and mineral-rich soil create the perfect conditions for 
                  maximum potency, Arjun knew he had found something special.
                </p>
                <p>
                  Today, O'rovana works with over 100 certified organic farmers across the Himalayas, 
                  ensuring that every product not only meets the highest quality standards but also 
                  supports the communities that make our mission possible.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1366913/pexels-photo-1366913.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Himalayan landscape"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <Mountain className="w-8 h-8 text-forest-green" />
                  <div>
                    <div className="font-semibold text-charcoal">1800m+</div>
                    <div className="text-sm text-gray-600">Altitude Sourcing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make, from sourcing to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-green text-white rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3 font-playfair">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our mission to bring Himalayan wellness to the world
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-forest-green"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-forest-green mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-charcoal mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-forest-green rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              The passionate individuals behind O'rovana's mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-1">{member.name}</h3>
                  <p className="text-forest-green font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-forest-green mb-2">100+</div>
              <div className="text-gray-600">Partner Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-forest-green mb-2">15,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-forest-green mb-2">25+</div>
              <div className="text-gray-600">Premium Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-forest-green mb-2">1800m</div>
              <div className="text-gray-600">Sourcing Altitude</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-beige">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-8">
            Our Certifications
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-lg shadow-md">
              <Shield className="w-8 h-8 text-forest-green" />
              <div className="text-left">
                <div className="font-semibold text-charcoal">FSSAI Certified</div>
                <div className="text-sm text-gray-600">Food Safety Standards</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-lg shadow-md">
              <Award className="w-8 h-8 text-forest-green" />
              <div className="text-left">
                <div className="font-semibold text-charcoal">AYUSH Pending</div>
                <div className="text-sm text-gray-600">Traditional Medicine</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-lg shadow-md">
              <Leaf className="w-8 h-8 text-forest-green" />
              <div className="text-left">
                <div className="font-semibold text-charcoal">Organic Certified</div>
                <div className="text-sm text-gray-600">100% Natural</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;