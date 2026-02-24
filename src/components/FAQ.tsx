import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are your products 100% natural and organic?",
      answer: "Yes, all our products are sourced directly from organic farms in the Himalayas. We use no artificial additives, preservatives, or chemicals in our processing."
    },
    {
      question: "How do you ensure the quality and purity of your products?",
      answer: "Every batch undergoes rigorous third-party testing for purity, potency, and contaminants. We maintain complete traceability from farm to bottle and hold FSSAI and AYUSH certifications."
    },
    {
      question: "What is your return and refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, contact us for a full refund or product exchange."
    },
    {
      question: "How should I store the herbal products?",
      answer: "Store all products in a cool, dry place away from direct sunlight. Keep containers tightly sealed to maintain freshness and potency. Oils should be refrigerated after opening."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we ship across India. International shipping is coming soon. Subscribe to our newsletter to be notified when we start shipping to your country."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our Himalayan wellness products
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-beige transition-colors focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-charcoal pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-forest-green" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;