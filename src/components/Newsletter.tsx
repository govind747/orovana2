import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-forest-green">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Mail className="w-12 h-12 text-beige mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
            Join the Himalayan Wellness Circle
          </h2>
          <p className="text-lg text-beige max-w-2xl mx-auto">
            Get exclusive access to new products, ancient wisdom, and special offers. 
            Plus, receive your free Ayurvedic wellness guide.
          </p>
        </div>

        <form className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-beige focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-terracotta text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-beige/80 mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;