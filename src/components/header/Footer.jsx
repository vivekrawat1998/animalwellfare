import React from "react";
import { useApi } from "../context/Apiprovider";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
export default function Footer() {

  const { data } = useApi();
  const addressData = Array.isArray(data?.api8) ? data.api8 : [];
  const emailData = Array.isArray(data?.api9) ? data.api9 : [];
  const phoneData = Array.isArray(data?.api10) ? data.api10 : [];
  console.log("emailData", emailData);

  const formatPhoneNumber = (number) => {
    if (!number) return "N/A";
    const str = number.toString();
    return `(+91) ${str.slice(0, 5)}-${str.slice(5)}`;
  };
  return (
    <footer className="bg-[#F7F1EA] text-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="mt-2 text-sm">
            We provide high-quality solutions with a focus on innovation and user experience.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 text-sm space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-lg font-semibold">Contact</h2>
          {emailData.map((item, index) => (
            <p key={index} className="text-black font-medium flex items-center gap-2">
              <FaEnvelope /> {item.title}
            </p>
          ))}
          {phoneData.map((item, index) => (
            <p key={index} className="text-black font-medium flex items-center gap-2">
              <FaPhone /> {formatPhoneNumber(item.title)}
            </p>
          ))}
          {addressData.map((item, index) => (
            <p key={index} className="text-black font-medium flex items-center gap-2">
              <FaMapMarkerAlt /> {item.title}
            </p>
          ))}
        </div>
      </div>
      <div className="text-center text-sm text-gray-600 mt-6">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
