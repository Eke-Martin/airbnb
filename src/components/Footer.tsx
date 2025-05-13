import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-light/20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <i className="bx bx-building-house text-2xl text-primary group-hover:scale-110 transition-transform"></i>
              <span className="text-xl font-bold text-black group-hover:text-primary transition-colors">
                AirBnB-Home-Rents
              </span>
            </Link>
            <p className="text-light text-sm font-light">
              Your trusted partner in finding the perfect property. We connect buyers, sellers, and
              renters with their dream spaces.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-light hover:text-primary transition-colors">
                <i className="bx bxl-facebook-circle text-2xl"></i>
              </a>
              <a href="#" className="text-light hover:text-primary transition-colors">
                <i className="bx bxl-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-light hover:text-primary transition-colors">
                <i className="bx bxl-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-light hover:text-primary transition-colors">
                <i className="bx bxl-linkedin text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/search"
                  className="text-light hover:text-primary transition-colors text-sm"
                >
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/post-property"
                  className="text-light hover:text-primary transition-colors text-sm"
                >
                  Post Property
                </Link>
              </li>
              <li>
                <Link
                  href="/saved"
                  className="text-light hover:text-primary transition-colors text-sm"
                >
                  Saved Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-light hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-light hover:text-primary transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Property Types</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/search?type=flat"
                  className="text-light hover:text-primary transition-colors text-sm"
                >
                  Flats & Apartments
                </Link>
              </li>
              <li>
                <Link
                  href="/search?type=house"
                  className="text-light hover:text-primary transition-colors text-sm"
                >
                  Houses & Villas
                </Link>
              </li>
              <li>
                <Link
                  href="/search?type=shop"
                  className="text-light hover:text-primary transition-colors text-sm"
                >
                  Shops & Malls
                </Link>
              </li>
              <li>
                <Link
                  href="/search?type=office"
                  className="text-light hover:text-primary transition-colors text-sm"
                >
                  Office Spaces
                </Link>
              </li>
              <li>
                <Link
                  href="/search?type=land"
                  className="text-light hover:text-primary transition-colors text-sm"
                >
                  Land & Plots
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="bx bx-map text-xl text-primary mt-1"></i>
                <span className="text-light text-sm">
                  123 Real Estate Street,
                  <br />
                  City Name, State - 123456
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="bx bx-phone text-xl text-primary"></i>
                <span className="text-light text-sm">+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="bx bx-envelope text-xl text-primary"></i>
                <span className="text-light text-sm">info@airbnbhomerent.com</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="bx bx-time text-xl text-primary"></i>
                <span className="text-light text-sm">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-light/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-light text-sm">
              © {new Date().getFullYear()} AirBnB-Home-Rents. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-light hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-light hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-light hover:text-primary transition-colors text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
