import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions: React.FC = () => {
  const lastUpdated = "May 15, 2023";

  return (
    <div className="container py-8 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-gray-500 mb-8">Last Updated: {lastUpdated}</p>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <p className="mb-6">
            Welcome to AffiliStore. Please read these terms and conditions carefully before using our website. 
            By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy.
            If you do not agree with any part of these terms, please do not use our website.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Use of Website</h2>
          <p className="mb-6">
            The content on this website is for your general information and use only. It is subject to change without notice. 
            This website may contain links to other websites which are not under our control. We have no control over the nature, 
            content, and availability of those sites and are not responsible for their content or privacy practices.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Affiliate Disclosure</h2>
          <p className="mb-6">
            AffiliStore participates in various affiliate marketing programs, which means we may earn commissions on 
            products purchased through our links to retailer sites. When you click on links to purchase products we recommend 
            and make a purchase, we may receive a small commission, at no extra cost to you. 
            These affiliate relationships do not influence our product recommendations or reviews, 
            which are based on thorough research and genuine evaluation.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Product Information & Pricing</h2>
          <p className="mb-6">
            We strive to provide accurate product information and pricing. However, we do not warrant that product descriptions or 
            other content on the site is accurate, complete, reliable, current, or error-free. Prices and availability of products 
            are subject to change without notice. We are not responsible for pricing, shipping or other errors.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">External Merchant Policies</h2>
          <p className="mb-6">
            When you click on affiliate links and make purchases through other merchants' websites, you are subject to those 
            merchants' terms and conditions, privacy policies, and return policies. We encourage you to review those policies 
            before making a purchase. AffiliStore is not responsible for the policies or practices of any third-party merchants.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">User Accounts</h2>
          <p className="mb-6">
            When you create an account with us, you must provide accurate, complete, and current information. You are responsible for 
            safeguarding your account credentials and for any activity that occurs under your account. You agree to notify us immediately 
            of any unauthorized access to or use of your account.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
          <p className="mb-6">
            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of 
            AffiliStore or its content suppliers and is protected by international copyright laws. The compilation of all content on this 
            site is the exclusive property of AffiliStore and is protected by international copyright laws.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">User-Generated Content</h2>
          <p className="mb-6">
            By posting, uploading, or submitting content to our website, you grant us a non-exclusive, royalty-free, perpetual, and worldwide 
            license to use, modify, publicly display, reproduce, and distribute that content on our website. You represent and warrant that 
            you own or have the necessary permissions to use and authorize us to use all intellectual property rights in and to any content you submit.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Prohibited Activities</h2>
          <p className="mb-6">
            You agree not to use our website for any unlawful purpose or prohibited activity. Prohibited activities include but are not limited to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Using the website in any way that could disable, overburden, or impair the site</li>
            <li>Using any robot, spider, or other automatic device to access the website</li>
            <li>Introducing any viruses, trojan horses, or other harmful material</li>
            <li>Attempting to gain unauthorized access to protected areas of the website</li>
            <li>Impersonating another person or entity</li>
            <li>Engaging in any activity that interferes with the proper working of the website</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
          <p className="mb-6">
            In no event shall AffiliStore, its officers, directors, employees, or agents, be liable for any indirect, incidental, special, 
            consequential, or punitive damages arising out of or related to your use of the website or any products purchased through the website.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Indemnification</h2>
          <p className="mb-6">
            You agree to indemnify, defend, and hold harmless AffiliStore and its officers, directors, employees, agents, and suppliers 
            from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable 
            attorneys' fees) arising out of or relating to your violation of these Terms and Conditions or your use of the website.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Modifications to Terms</h2>
          <p className="mb-6">
            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting 
            on the website. Your continued use of the website following the posting of revised Terms and Conditions means that you 
            accept and agree to the changes.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
          <p className="mb-6">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, 
            without regard to its conflict of law provisions.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
          <p className="mb-4">
            Questions about the Terms and Conditions should be sent to us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="mb-1">Email: legal@affilistore.com</p>
            <p className="mb-1">Phone: +1 (234) 567-890</p>
            <p>Address: 123 Commerce Street, Business District, City, Country</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link to="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;