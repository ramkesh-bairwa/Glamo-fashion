import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "May 15, 2023";

  return (
    <div className="container py-8 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last Updated: {lastUpdated}</p>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <p className="mb-6">
            At AffiliStore, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
            and safeguard your information when you visit our website or make a purchase. Please read this 
            privacy policy carefully. By using our website, you consent to the data practices described in this statement.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to us when you register on the website, 
            express interest in obtaining information about us or our products, or participate in activities on the website.
          </p>
          <p className="mb-6">
            The personal information that we collect depends on the context of your interactions with us and the website, 
            the choices you make, and the products and features you use. The personal information we collect may include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Name and contact information (email address, phone number, mailing address)</li>
            <li>Billing and payment information</li>
            <li>Account credentials</li>
            <li>Order history and preferences</li>
            <li>Feedback and correspondence (such as survey responses or customer support inquiries)</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
          <p className="mb-4">
            We use personal information collected via our website for a variety of business purposes described below. 
            We process your personal information for these purposes based on our legitimate business interests, 
            in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To facilitate account creation and authentication</li>
            <li>To process and fulfill orders and send related information including order confirmations</li>
            <li>To send administrative information such as changes to our terms, conditions, and policies</li>
            <li>To personalize your experience and deliver content and product offerings relevant to your interests</li>
            <li>To respond to inquiries and offer support</li>
            <li>To request feedback and contact you about your use of our website</li>
            <li>To improve our website, products, marketing, and customer relationships</li>
            <li>To comply with legal obligations</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">Cookies and Tracking Technologies</h2>
          <p className="mb-6">
            We may use cookies and similar tracking technologies to access or store information. These technologies help us understand 
            user behavior, tell us which parts of our website people have visited, facilitate and measure the effectiveness of 
            advertisements and web searches, and improve our services.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Third-Party Disclosure</h2>
          <p className="mb-4">
            We may share your information with our business partners to offer you certain products, services, or promotions.
          </p>
          <p className="mb-6">
            We may disclose your information where we are legally required to do so in order to comply with applicable law, 
            governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Affiliate Disclosure</h2>
          <p className="mb-6">
            As an affiliate marketing website, we participate in various affiliate programs. This means we may earn commissions 
            when you click on or make purchases via links on our website, at no additional cost to you. These affiliate relationships 
            do not impact our product recommendations or reviews, which are based on genuine evaluation.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Security of Your Information</h2>
          <p className="mb-6">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have 
            taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, 
            no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any 
            interception or other type of misuse.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Your Privacy Rights</h2>
          <p className="mb-6">
            Depending on your location, you may have certain rights regarding your personal information, such as the right to 
            request access to your personal information, request correction of any information that is inaccurate, 
            request deletion of your personal information, or request restriction of processing of your personal information.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Changes to This Privacy Policy</h2>
          <p className="mb-6">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
            on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about our Privacy Policy or data processing practices, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="mb-1">Email: privacy@affilistore.com</p>
            <p className="mb-1">Phone: +1 (234) 567-890</p>
            <p>Address: 123 Commerce Street, Business District, City, Country</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link to="/terms" className="text-primary hover:underline">
            Terms & Conditions
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;