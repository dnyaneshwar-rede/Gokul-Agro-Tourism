import React from 'react';

interface FooterProps {
  companyName?: string;
  companyAddress?: string;
  companyEmail?: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'Gokul Agri-Tourism and Adventure Park',
  companyAddress = 'Gokul Krishi Tourism Center and Picnic Centre, Nandapur, Jalna.',
  companyEmail = 'yourcompany@email.com',
}) => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="contact-info">
            <h3>{companyName}</h3>
            <p>{companyAddress}</p>
            <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
          </div>
          <nav className="text-center md:text-left">
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
          <nav className="text-center md:text-left">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="copyright text-center mt-4">
          <p>&copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
          <p> Made with ❤️ by Novodayan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
