import React from "react";

interface TermsAndConditionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-2" onClick={onClose}>
      <div
        className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-blue-900 hover:text-yellow-500 text-2xl font-bold"
          aria-label="Close Terms and Conditions"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">YUNIMALL LTD TERMS AND CONDITIONS</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">Last Updated: 1st July, 2025</p>
        <div className="text-gray-800 text-base space-y-4 text-justify">
          <p>Welcome to <span className="font-bold">Yunimall</span>, a student-focused e-commerce platform dedicated to supporting and empowering student entrepreneurs by providing a seamless online marketplace to buy and sell goods and services across university campuses. These Terms and Conditions ("Terms") govern your use of the Yunimall platform (the "Platform"), which includes the Yunimall mobile application, website, and all related services offered by us ("Yunimall," "we," "our," or "us").</p>
          <p>By accessing or using Yunimall, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not accept these Terms, you may not use the Platform.</p>
          <h3 className="font-semibold mt-6">1. Introduction</h3>
          <p>Yunimall is designed specifically for students and student-run businesses to enable digital commerce across university boundaries. Whether you're a vendor listing your handmade crafts or a student looking for quality and affordable products, Yunimall connects you to a wider academic marketplace.</p>
          <p>These Terms and Conditions govern your relationship with us and outline the expectations, rights, responsibilities, and legal obligations that accompany your use of the platform. You are also bound by our Privacy Policy and any other policies published by Yunimall.</p>
          <h3 className="font-semibold mt-6">2. Definitions</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><b>User</b> means any individual or entity accessing or using the Platform, including Vendors and Buyers.</li>
            <li><b>Vendor</b> (or "Seller") refers to users who post listings to sell goods or services on the Platform.</li>
            <li><b>Buyer</b> refers to users who purchase or intend to purchase goods or services through the Platform.</li>
            <li><b>Account</b> means the user profile created on the Platform, containing personal and transactional information.</li>
            <li><b>Services</b> include all the features, functionalities, content, and support provided by Yunimall.</li>
            <li><b>Transactions</b> refer to all purchases, sales, and financial dealings made between users through the Platform.</li>
          </ul>
          <h3 className="font-semibold mt-6">3. Account Registration</h3>
          <p>To access Yunimall's features, users must create an account with accurate and current information. Users are solely responsible for maintaining the confidentiality of their login credentials and for all activities that occur under their account.</p>
          <h4 className="font-semibold mt-4">Eligibility Criteria</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Users must be at least 16 years old and enrolled in a recognized educational institution.</li>
            <li>Vendors must be student entrepreneurs or student-run businesses.</li>
          </ul>
          <h4 className="font-semibold mt-4">Registration Requirements</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Valid university email address or student ID (for verification purposes).</li>
            <li>Full name, contact number, university name, and business details (for vendors).</li>
          </ul>
          <h4 className="font-semibold mt-4">User Responsibilities</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Keep login credentials secure.</li>
            <li>Update profile information promptly if there are any changes.</li>
            <li>Notify Yunimall of any unauthorized account activity immediately.</li>
          </ul>
          <h3 className="font-semibold mt-6">4. User Obligations</h3>
          <p>As a user of Yunimall, you agree to:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Use the Platform in compliance with all applicable laws and university regulations.</li>
            <li>Provide accurate and up-to-date information.</li>
            <li>Treat other users with respect and refrain from harassment or abusive behavior.</li>
            <li>Not use the Platform for fraudulent or illegal transactions.</li>
            <li>Refrain from infringing on the intellectual property rights of others.</li>
          </ul>
          <p>Failure to meet these obligations may result in account suspension, termination, or legal action.</p>
          <h3 className="font-semibold mt-6">5. Vendor Responsibilities</h3>
          <p>As a vendor, you represent and warrant that:</p>
          <h4 className="font-semibold mt-4">5.1 Product Listings</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Listings must include detailed and accurate descriptions, clear photos, and pricing.</li>
            <li>You own the rights to all photos and descriptions posted.</li>
            <li>You will present your brand using only the best graphic designs and general printing services to uphold quality and professionalism.</li>
          </ul>
          <h4 className="font-semibold mt-4">5.2 Fulfillment and Delivery</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>You are responsible for processing orders and delivering products or services in a timely manner.</li>
            <li>All delivery terms must be clearly communicated.</li>
          </ul>
          <h4 className="font-semibold mt-4">5.3 Quality Assurance</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Products or services sold must meet the expectations set in their listings.</li>
            <li>Vendors must adhere to safety, health, and legal standards relevant to their offerings.</li>
          </ul>
          <h4 className="font-semibold mt-4">5.4 Customer Service</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Respond to customer inquiries within 24-48 hours.</li>
            <li>Handle refunds, exchanges, and disputes fairly and promptly.</li>
          </ul>
          <p>Yunimall reserves the right to suspend or remove vendors who consistently violate quality standards or receive excessive complaints.</p>
          <h3 className="font-semibold mt-6">6. Use of the Platform</h3>
          <p>Users agree to use the Platform for its intended purposes and in accordance with these Terms.</p>
          <h4 className="font-semibold mt-4">Permitted Uses:</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Browsing product listings and services.</li>
            <li>Making legitimate purchases or sales.</li>
            <li>Using the in-app messaging system to communicate respectfully with other users.</li>
          </ul>
          <h4 className="font-semibold mt-4">Prohibited Activities:</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Uploading viruses or malicious software.</li>
            <li>Attempting to gain unauthorized access to other user accounts.</li>
            <li>Posting misleading, fraudulent, or harmful content.</li>
            <li>Using Yunimall to promote external websites, products, or services not approved by Yunimall.</li>
          </ul>
          <p>We strongly encourage vendors to enhance their visual branding using the best graphic designs and general printing services available, which positively influences buyer trust and engagement.</p>
          <h3 className="font-semibold mt-6">7. Payments and Transactions</h3>
          <p>All payments on Yunimall are processed through Yunimall’s secure account system. When a Buyer places an order, payment is made to Yunimall.</p>
          <h4 className="font-semibold mt-4">7.1 Payment Handling</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Funds are held by Yunimall until confirmation of delivery by the Buyer.</li>
            <li>Yunimall will transfer payments to the Vendor 7 days after the Buyer has received the goods or services or earlier if the buyer confirms before 7 days, unless a dispute is raised.</li>
          </ul>
          <h4 className="font-semibold mt-4">7.2 Payment Methods</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Debit/credit card, bank transfer, and other digital wallets as may be approved by Yunimall.</li>
          </ul>
          <h4 className="font-semibold mt-4">7.3 Transaction Fees</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Yunimall may charge a small service fee for each transaction, which will be disclosed before order confirmation.</li>
          </ul>
          <h4 className="font-semibold mt-4">7.4 Payment Disputes</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>All payment-related issues should first be addressed between the Buyer and Vendor.</li>
            <li>Yunimall may intervene if the issue is escalated and evidence is provided.</li>
          </ul>
          <p>Yunimall shall not be liable for any losses due to unauthorized transactions made through compromised accounts.</p>
          <h3 className="font-semibold mt-6">8. Shipping and Delivery</h3>
          <p>Yunimall oversees and manages all shipping and delivery operations. Vendors are responsible for ensuring products are properly packaged and ready for dispatch.</p>
          <h4 className="font-semibold mt-4">Vendor Shipping Obligations:</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Yunimall coordinates the logistics for delivery and pickup.</li>
            <li>Vendors must cooperate with the logistics team for timely dispatch of orders.</li>
            <li>Vendors are expected to use appropriate packaging and presentation, ideally utilizing the best graphic designs and general printing services for branding.</li>
          </ul>
          <h4 className="font-semibold mt-4">Buyer Expectations:</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Provide accurate delivery address and be available to receive packages.</li>
            <li>Inspect goods upon delivery and report issues within the designated timeframe.</li>
          </ul>
          <p>Yunimall ensures timely delivery, but is not liable for delays caused by acts beyond our control, including force majeure events.</p>
          <h3 className="font-semibold mt-6">9. Refund and Return Policy</h3>
          <p>We encourage transparency and fairness in every transaction. The refund and return policy protects both buyers and vendors.</p>
          <h4 className="font-semibold mt-4">9.1 Conditions for Refunds</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Buyer did not receive the item within the vendor's stated delivery period.</li>
            <li>Item received is defective, damaged, or significantly different from the description.</li>
            <li>Service not delivered or not rendered as agreed.</li>
          </ul>
          <h4 className="font-semibold mt-4">9.2 Return Procedure</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Buyer must initiate a return request within 3 days of receiving the product.</li>
            <li>Vendor must respond to the request within 48 hours.</li>
            <li>Both parties should communicate respectfully and try to resolve the issue amicably.</li>
          </ul>
          <h4 className="font-semibold mt-4">9.3 Exceptions</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Personalized or custom-made items may not be eligible for return unless damaged.</li>
            <li>Digital goods and services rendered cannot be refunded once delivered as agreed.</li>
          </ul>
          <p>Yunimall will mediate disputes only when both parties provide sufficient evidence.</p>
          <h3 className="font-semibold mt-6">10. Intellectual Property</h3>
          <p>Yunimall retains full ownership of all logos, content, and design elements associated with the platform.</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Users may not copy, reproduce, or use Yunimall’s intellectual property without prior written permission.</li>
            <li>Vendors must ensure they have rights to all media and content uploaded to the platform.</li>
            <li>Use of Yunimall’s graphic design and printing services must maintain brand image and quality.</li>
          </ul>
          <h3 className="font-semibold mt-6">11. Privacy Policy Reference</h3>
          <p>Yunimall is committed to protecting user data in accordance with applicable data protection laws.</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>A separate privacy policy outlines how personal data is collected, used, and stored.</li>
            <li>By using the platform, users consent to the practices described in the Privacy Policy.</li>
          </ul>
          <h3 className="font-semibold mt-6">12. Limitation of Liability</h3>
          <p>Yunimall provides a platform for student users and student business owners to interact but does not take responsibility for the outcomes of user transactions.</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Yunimall is not liable for losses, damages, or disputes arising from transactions between users.</li>
            <li>No guarantees are made regarding the success or profitability of any business conducted on the platform.</li>
          </ul>
          <h3 className="font-semibold mt-6">13. Termination and Suspension</h3>
          <p>Yunimall reserves the right to suspend or terminate user accounts at its discretion under the following conditions:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Violation of these Terms or applicable laws.</li>
            <li>Engagement in fraudulent, abusive, or suspicious activities.</li>
            <li>Repeated negative feedback or complaints.</li>
          </ul>
          <p>Termination may result in loss of access to the user’s account and its data.</p>
          <h3 className="font-semibold mt-6">14. Changes to the Terms</h3>
          <p>These Terms and Conditions may be updated occasionally to reflect changes in policies or legal requirements.</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Users will be notified of significant changes via email or platform alerts.</li>
            <li>Continued use of the platform after changes have been posted constitutes acceptance.</li>
          </ul>
          <h3 className="font-semibold mt-6">15. Disclaimer</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Yunimall does not guarantee uninterrupted availability or error-free operation of its services.</li>
            <li>Services are provided “as is” without warranties of any kind.</li>
          </ul>
          <h3 className="font-semibold mt-6">16. Governing Law and Jurisdiction</h3>
          <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Any disputes arising shall be resolved through negotiation or arbitration within Nigeria.</li>
            <li>Users agree to submit to the jurisdiction of Nigerian courts if legal proceedings are necessary.</li>
          </ul>
          <h3 className="font-semibold mt-6">17. Contact Information</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Email: yunimall92@gmail.com ; info@yuni-mall.com</li>
            <li>Phone: +234-802-406-1270, +234-704-048-1319</li>
            <li>Registered Address: Km 52, Lekki-Epe Expressway, Lagos.</li>
          </ul>
          <h3 className="font-semibold mt-6">18. Acceptance of Terms</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>By accessing and using Yunimall, users confirm that they have read, understood, and agreed to be bound by these Terms and Conditions.</li>
            <li>Agree to comply with all applicable laws and Yunimall policies.</li>
          </ul>
          <p>If you do not agree to these Terms, please do not use the platform.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
