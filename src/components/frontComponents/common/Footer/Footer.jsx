import { Link } from "react-router-dom";

import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { TiSocialYoutube } from "react-icons/ti";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  console.log(currentDate)

  return (
    <>


      <footer className="bg-gray-900 text-white py-10 w-full fixed bottom-0">
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <h4 className="text-lg font-semibold mb-3">FOLLOW US</h4>
            <div className="flex space-x-4 text-gray-400">


              {/* Replace these with actual social media icons */}
              <Link to="/" className="hover:text-white    border font-bold border-gray-400 rounded-full p-3 hover:bg-yellow-600 hover:text-white transition duration-300"><FaFacebookF /></Link>
              <Link to="/" className="hover:text-white    border font-bold border-gray-400 rounded-full p-3 hover:bg-yellow-600 hover:text-white transition duration-300"><FaTwitter /></Link>
              <Link to="/" className="hover:text-white    border font-bold border-gray-400 rounded-full p-3 hover:bg-yellow-600 hover:text-white transition duration-300"><TiSocialYoutube
              /></Link>
              <Link to="/" className="hover:text-white    border font-bold border-gray-400 rounded-full p-3 hover:bg-yellow-600 hover:text-white transition duration-300"><TfiGoogle /></Link>

            </div>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">CATEGORIES</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white"> <span className="flex items-center space-x-2"><MdOutlineDoubleArrow /> <span className="pl-2"></span> Watch</span> </Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white"> <span className="flex items-center space-x-2"><MdOutlineDoubleArrow /> <span className="pl-2"></span> Men</span> </Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white"> <span className="flex items-center space-x-2"><MdOutlineDoubleArrow /> <span className="pl-2"></span> Clothing</span> </Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white"> <span className="flex items-center space-x-2"><MdOutlineDoubleArrow /> <span className="pl-2"></span> Kids</span> </Link></li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white"> <span className="flex items-center space-x-2"><MdOutlineDoubleArrow /> <span className="pl-2"></span> Specials</span> </Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white"> <span className="flex items-center space-x-2"><MdOutlineDoubleArrow /> <span className="pl-2"></span> New Products</span> </Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white"> <span className="flex items-center space-x-2"><MdOutlineDoubleArrow /> <span className="pl-2"></span> Best Sellers</span> </Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white"> <span className="flex items-center space-x-2"><MdOutlineDoubleArrow /> <span className="pl-2"></span> Contact Us</span> </Link></li>
            </ul>
          </div>

          {/* My Account Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">MY ACCOUNT</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white"> <span className="flex items-center space-x-2"><MdOutlineDoubleArrow /> <span className="pl-2"></span> My Orders</span> </Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white"> <span className="flex items-center space-x-2"><MdOutlineDoubleArrow /> <span className="pl-2"></span> My Credit Slips</span> </Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white"> <span className="flex items-center space-x-2"><MdOutlineDoubleArrow /> <span className="pl-2"></span> My Addresses</span> </Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white"> <span className="flex items-center space-x-2"><MdOutlineDoubleArrow /> <span className="pl-2"></span> My Personal Info</span> </Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white"> <span className="flex items-center space-x-2"><MdOutlineDoubleArrow /> <span className="pl-2"></span> Sign Out</span> </Link></li>

            </ul>
          </div>

        </section>

        <section className="border-t border-gray-700 mt-8 pt-6 text-center">
          <small className="text-gray-400">© {currentDate} ZYN-MART Made with <span className="text-yellow-500">♥</span> by Developer Team</small>
        </section>

      </footer>

    </>
  );
};

export default Footer;
