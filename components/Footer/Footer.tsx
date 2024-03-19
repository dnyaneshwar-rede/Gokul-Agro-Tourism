import React from 'react';

interface FooterProps {
  companyName?: string;
  companyAddress?: string;
  companyMobileNo?: number;
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'Gokul Agri-Tourism and Picnic Centre',
  companyAddress = 'Gokul Krishi Tourism and Picnic Centre, Nandapur, Jalna.',
  companyMobileNo = '+919423121863',
}) => {
  return (
    <footer className="bg-gray-800 text-white">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 ">
      <div className="contact-info text-center mt-4">
        <p className="text-center">{companyAddress}</p>
        <p className="text-center">{companyMobileNo}</p>
      </div>
    </div>
    <div className="copyright text-center mt-4">
      <p>&copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
      <p>Made with ❤️ by Novodayan</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
