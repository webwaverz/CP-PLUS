"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-red-600">
            <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/products" className="text-gray-700 hover:text-yellow-500">Products</Link>
            <Link href="/services" className="text-gray-700 hover:text-yellow-500">Services</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-yellow-500">Pricing</Link>
            <Link href="/about" className="text-gray-700 hover:text-yellow-500">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-yellow-500">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            <Link href="/services" className="text-gray-700 hover:text-yellow-500">Services</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-yellow-500">Pricing</Link>
            <Link href="/about" className="text-gray-700 hover:text-yellow-500">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-yellow-500">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
