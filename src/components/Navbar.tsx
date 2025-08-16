// components/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full top-0 z-50">
      <div className="container mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Parbhuji Logo"
            width={150}
            height={60}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-semibold text-gray-800">
          <li>
            <Link href="/" className="hover:text-orange-600">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-orange-600">
              ABOUT US
            </Link>
          </li>
          <li className="relative group">
            <button className="flex items-center hover:text-orange-600">
              VISA <ChevronDown size={16} className="ml-1" />
            </button>
            {/* Dropdown */}
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded-md">
              <li>
                <Link
                  href="/visa/student"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Student Visa
                </Link>
              </li>
              <li>
                <Link
                  href="/visa/work"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Work Visa
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/tickets" className="hover:text-orange-600">
              AIR TICKETS
            </Link>
          </li>
          <li className="relative group">
            <button className="flex items-center hover:text-orange-600">
              ACADEMIC <ChevronDown size={16} className="ml-1" />
            </button>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded-md">
              <li>
                <Link
                  href="/academic/ielts"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  IELTS
                </Link>
              </li>
              <li>
                <Link
                  href="/academic/pte"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  PTE
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/archive" className="hover:text-orange-600">
              ARCHIVE
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-orange-600">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Apply Now Button */}
        <Link
          href="/apply"
          className="hidden md:block bg-orange-600 text-white font-semibold px-4 py-2 rounded hover:bg-orange-700"
        >
          Apply Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-3 text-gray-800 font-semibold">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/about">ABOUT US</Link></li>
          <li><Link href="/visa">VISA</Link></li>
          <li><Link href="/tickets">AIR TICKETS</Link></li>
          <li><Link href="/academic">ACADEMIC</Link></li>
          <li><Link href="/archive">ARCHIVE</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
          <li>
            <Link
              href="/apply"
              className="block bg-orange-600 text-white text-center px-4 py-2 rounded hover:bg-orange-700"
            >
              Apply Now
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
