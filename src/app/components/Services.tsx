"use client"; // Ensures this is a Client Component

import { motion } from "framer-motion";
import AvatarCard from "./AvatarCard";

const services = [
  { src: "/education.png", name: "Education Sector" },
  { src: "/health.png", name: "Healthcare Sector" },
  { src: "/it.png", name: "IT Sector" },
  { src: "/food.png", name: "Hospitality Sector" },
  { src: "/money.png", name: "Banking Sector" },
  { src: "/residential.png", name: "Residential Sector" },
  { src: "/retail.png", name: "Retail Sector" },
  { src: "/camera.png", name: "City Surveillance" },
];

const Services = () => {
  return (
    <div className="flex flex-col items-center p-12 bg-gradient-to-br from-[#F6B003] via-[#ecb55d] to-[#f19e28]">
      {/* Title with Horizontal Lines */}
      <div className="flex items-center w-full max-w-xl mb-10">
        <div className="flex-1 h-[2px] bg-black opacity-70 mr-4"></div>
        <div className="px-6 py-3 bg-yellow-300 text-black font-semibold text-xl shadow-md rounded-md">
          We Provide Solution For
        </div>
        <div className="flex-1 h-[2px] bg-black opacity-70 ml-4"></div>
      </div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-wrap w-full max-w-5xl justify-center text-black relative"
      >
        {services.map((service, index) => {
          const isLastInRow = (index + 1) % 4 === 0;
          return (
            <div key={index} className="relative flex justify-center p-6 w-1/2 md:w-1/4">
              {/* Avatar Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AvatarCard src={service.src} name={service.name} />
              </motion.div>

              {/* Vertical Separator Lines - Add 3 per row */}
              {!isLastInRow && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-16 w-[2px] bg-gray-500 opacity-60"></div>
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;
