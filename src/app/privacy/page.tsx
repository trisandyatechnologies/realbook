"use client"
import React from 'react';
import { Card, Divider, Flex, Space, Typography } from 'antd';
import { MediumCircleFilled } from '@ant-design/icons';
import { Col, Row } from 'antd';
  
  
  const App: React.FC = () => (
     
    <Flex  vertical style={{padding:20}}>
      <Typography.Title style={{textAlign:"center", textDecoration:"underline"}}>Privacy and Policy</Typography.Title>
      
       <Typography.Title level={6}>Description :</Typography.Title>
      <Typography >
Creating a privacy policy for a real estate business is essential to inform users about how their personal information will be collected, used, and protected. Below is a general outline that you can use as a starting point. Please note that this is a template, and you should customize it to fit the specific practices and legal requirements of your real estate business. Additionally, it's advisable to seek legal counsel to ensure compliance with local regulations.
      </Typography>
      
      <Typography.Title level={5}>1. Introduction</Typography.Title>
      <Typography >
Creating a privacy policy for a real estate business is essential to inform users about how their personal information will be collected, used, and protected. Below is a general outline that you can use as a starting point. Please note that this is a template, and you should customize it to fit the specific practices and legal requirements of your real estate business. Additionally, it's advisable to seek legal counsel to ensure compliance with local regulations.
      </Typography>
     
      <Typography.Title level={5}>2. Information We Collect</Typography.Title>
      <Typography >
      We may collect the following types of personal information:
      Contact Information: Name, address, phone number, email address.
      Property Information: Details about properties you are interested in buying, selling, or renting.
      Financial Information: Information related to your financial status, such as income and credit history.
      Website Usage Information: Data on how you interact with our website, including pages visited and time spent.
      </Typography>

      <Typography.Title level={5}>3. How We Collect Information:</Typography.Title>
      <Typography >
      We may collect information through:
      Direct interactions: Information you provide when filling out forms, making inquiries, or using our services.
      Automated technologies: Cookies and similar technologies when you visit our website.
      </Typography>

      <Typography.Title level={5}>4. How We Use Your Information</Typography.Title>
      <Typography >
      We may use your information for the following purposes:
      Providing and improving our services.
      Communicating with you about properties, transactions, and services.
      Marketing and promotional activities (with your consent).
      Analyzing website usage to enhance user experience.
      </Typography>

      <Typography.Title level={5}>5. Sharing Your Information:</Typography.Title>
      <Typography >
      We may share your information with:
      Third-party service providers: To assist with business operations.
      Legal and regulatory authorities: In compliance with applicable laws.
      </Typography>

      <Typography.Title level={5}>6. Security Measures:</Typography.Title>
      <Typography >
      We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.
      </Typography>

      <Typography.Title level={5}>7. Your Choices:</Typography.Title>
      <Typography >
      You have the right to:
      Access, correct, or delete your personal information.
      Opt-out of marketing communications.
      </Typography>

      <Typography.Title level={5}>8. Changes to this Privacy Policy:</Typography.Title>
      <Typography >
      We reserve the right to update this Privacy Policy. Any changes will be effective when posted on our website.
      </Typography>

      <Typography.Title level={5}>9. Contact Us:</Typography.Title>
      <Typography >
      If you have questions or concerns about this Privacy Policy, please contact us at [your contact information].
      </Typography>

      <Typography.Title level={5} style={{color:"red"}}>10. Legal Compliance:</Typography.Title>
      <Typography >
      This Privacy Policy is intended to comply with relevant data protection laws and regulations.
      </Typography>
     

       <Typography.Title style={{textAlign:"center",borderTop:"1px solid black"}}>Conclusion</Typography.Title>
       <Typography>
       Remember, this is a general template, and it's crucial to tailor it to your specific real estate business practices and the legal requirements of your jurisdiction. Consulting with legal professionals can ensure that your privacy policy is comprehensive and compliant with applicable laws.
       </Typography>
      </Flex>
    
);

export default App;