"use client";

import Link from "next/link";
import { 
  Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin, MessageCircle 
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      {/* Google Map */}
      <div className="relative w-full pb-[28.125%]">
        <iframe
          src="https://maps.google.com/maps?q=SSAR%20%26%20Co%20Pimpri-Chinchwad%2C%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="absolute top-0 left-0 w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-wrap justify-between space-y-8 md:space-y-0">

        {/* Left Section: Logo & Description */}
        <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
          <Image src="/images/logowhite.png" alt="Logo" width={300} height={300} />
          <p className="text-gray-300 text-center md:text-left leading-relaxed">
            Our Commitment is keeping you safe! <br /> World-class and trusted, uninterrupted safety service provider.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full pl-10 md:w-1/5 flex flex-col items-center md:items-start">
          <h6 className="text-lg font-semibold text-white mb-4">Quick Links</h6>
          <ul className="space-y-3 text-center md:text-left">
            {[ "Services", "Pricing", "About", "Contact"].map((item, index) => (
              <li key={index}>
                <Link href={`/${item.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-blue-400 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
          <h6 className="text-lg font-semibold text-white mb-4">Contact</h6>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center">
              <MapPin className="mr-3 text-blue-400" size={40} /> 
              Shop No 127, August High Street, Ulkanagari, Aurangabad 431005.
            </li>
            <li className="flex items-center">
              <Mail className="mr-3 text-red-400" size={20} />
              <Link href="mailto:" className="hover:text-blue-400 transition">info@safeedge.co.in </Link>
            </li>
            <li className="flex items-center">
              <Phone className="mr-3 text-green-400" size={20} />
              <Link href="tel:+918668708736" className="hover:text-blue-400 transition">+91 8668708736</Link>
            </li>
            <li className="flex items-center">
              <Phone className="mr-3 text-green-400" size={20} />
              <Link href="tel:+919881301308" className="hover:text-blue-400 transition">+91 9881301308</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/4 pl-10 flex flex-col items-center md:items-start">
          <h6 className="text-lg font-semibold text-white mb-4">Follow Us</h6>
          <div className="grid grid-cols-3 gap-5">
            {[
              { link: "https://wa.me/+91", icon: <MessageCircle size={30} className="text-green-400" /> },
              { link: "", icon: <Linkedin size={30} className="text-blue-400" /> },
              { link: "#", icon: <Facebook size={30} className="text-gray-400" /> },
              { link: "#", icon: <Twitter size={30} className="text-blue-500" /> },
              { link: "#", icon: <Youtube size={30} className="text-red-500" /> },
              { link: "#", icon: <Instagram size={30} className="text-pink-400" /> },
            ].map(({ link, icon }, index) => (
              <Link key={index} href={link} className="hover:scale-110 transition transform">
                {icon}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 flex justify-around text-center py-4 text-gray-400 text-sm">
        <p>© 2025 SAFE EDGE - All rights reserved.</p>
        <p>Designed & Developed by <span className="text-white font-semibold"> Web Waverz</span></p>
      </div>
    </footer>
  );
}
