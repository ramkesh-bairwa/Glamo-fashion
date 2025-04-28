import React from 'react';
import { Award, Users, Heart, ThumbsUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="mt-16">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About AffiliStore</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're dedicated to helping you discover the best products through honest reviews and curated selections.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At AffiliStore, our mission is to simplify your shopping experience by providing 
              comprehensive reviews and recommendations for the best products across various categories.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We understand that finding the right product can be overwhelming with countless options 
              available online. That's why we've dedicated ourselves to researching, testing, and 
              curating only the highest quality products that deliver real value to our customers.
            </p>
            <p className="text-lg text-gray-700">
              Through our affiliate partnerships with trusted retailers and brands, we're able to offer you 
              competitive prices while maintaining our commitment to honest, unbiased product recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ThumbsUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">
                We only recommend products that meet our high standards for quality and value.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                Our reviews are honest and transparent, helping you make informed decisions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                We value user feedback and continuously improve based on community insights.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Trust</h3>
              <p className="text-gray-600">
                Building long-term relationships with our users through reliability and consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Alex Johnson</h3>
                <p className="text-primary mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 10 years in product research and e-commerce, Alex founded AffiliStore to help consumers make better purchasing decisions.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Chen</h3>
                <p className="text-primary mb-3">Head of Product Research</p>
                <p className="text-gray-600">
                  Sarah leads our product testing team, bringing her expertise in consumer electronics and home goods to ensure thorough, accurate reviews.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Rivera</h3>
                <p className="text-primary mb-3">Content Director</p>
                <p className="text-gray-600">
                  Michael ensures our content is informative, engaging, and accessible, helping users understand the features and benefits of each product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3">How do you select products to review?</h3>
                <p className="text-gray-700">
                  We research market trends, analyze user feedback, and consider product popularity across various 
                  retailers. Each product is thoroughly evaluated for quality, features, and value before being 
                  recommended on our platform.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3">Are your reviews biased due to affiliate relationships?</h3>
                <p className="text-gray-700">
                  Absolutely not. Our editorial team operates independently from our business partnerships. 
                  We recommend products based solely on their merits and maintain the same evaluation standards 
                  regardless of affiliate relationships.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3">How do you make money?</h3>
                <p className="text-gray-700">
                  We earn commissions through affiliate partnerships when users purchase products through our links. 
                  This allows us to provide our service free of charge while maintaining our commitment to unbiased 
                  recommendations. The affiliate relationships never influence our product ratings.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3">Can I suggest products for review?</h3>
                <p className="text-gray-700">
                  Absolutely! We welcome suggestions from our community. You can contact us through our 
                  Contact Us page with your product recommendations, and our team will consider them for future reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;