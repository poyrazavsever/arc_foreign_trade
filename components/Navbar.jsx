import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa"; // React Icons importu

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumber = "+90 000 000 00 00";
  const emailAddress = "info@arcdisticaret.com";
  const socialLinks = [
    { name: "Instagram", href: "#", Icon: FaInstagram },
    { name: "LinkedIn", href: "#", Icon: FaLinkedinIn },
    { name: "WhatsApp", href: "#", Icon: FaWhatsapp },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Menü kapatılır
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50">
      {/* Top: Logo + İletişim */}
      <div className="bg-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center gap-6">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/Images/Logo.png"
                alt="ARC Dış Ticaret Logo"
                width={150}
                height={50}
              />
            </Link>

            <div className="hidden sm:flex flex-row items-center gap-4">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="text-neutral-700 hover:text-secondary"
              >
                {phoneNumber}
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="text-neutral-700 hover:text-secondary"
              >
                {emailAddress}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="text-neutral-700 hover:text-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-neutral-700"
                aria-label="Menüyü aç/kapat"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Linkler */}
      <div className="bg-primary">
        <div className="container mx-auto hidden md:flex justify-between items-center py-3 px-6">
          <div className="flex items-center gap-6">
            <Link href="/" onClick={closeMenu}>
              <span
                className={`text-white hover:text-white/80 ${
                  router.pathname === "/" ? "underline" : ""
                }`}
              >
                Ana Sayfa
              </span>
            </Link>
            <Link href="/about" onClick={closeMenu}>
              <span
                className={`text-white hover:text-white/80 ${
                  router.pathname === "/about" ? "underline" : ""
                }`}
              >
                Hakkımızda
              </span>
            </Link>
            <Link href="/services" onClick={closeMenu}>
              <span
                className={`text-white hover:text-white/80 ${
                  router.pathname === "/services" ? "underline" : ""
                }`}
              >
                Hizmetlerimiz
              </span>
            </Link>
            <Link href="/products" onClick={closeMenu}>
              <span
                className={`text-white hover:text-white/80 ${
                  router.pathname === "/products" ? "underline" : ""
                }`}
              >
                Ürünler
              </span>
            </Link>
            <Link href="/references" onClick={closeMenu}>
              <span
                className={`text-white hover:text-white/80 ${
                  router.pathname === "/references" ? "underline" : ""
                }`}
              >
                Referanslar
              </span>
            </Link>
            <Link href="/blog" onClick={closeMenu}>
              <span
                className={`text-white hover:text-white/80 ${
                  router.pathname === "/blog" ? "underline" : ""
                }`}
              >
                Blog
              </span>
            </Link>
            <Link href="/ai-assistant" onClick={closeMenu}>
              <span
                className={`text-white hover:text-white/80 ${
                  router.pathname === "/ai-assistant" ? "underline" : ""
                }`}
              >
                Dijital Danışman
              </span>
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              <span
                className={`text-white hover:text-white/80 ${
                  router.pathname === "/contact" ? "underline" : ""
                }`}
              >
                İletişim
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobil Menü (Tam Ekran) */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="md:hidden fixed top-0 left-0 w-full h-full bg-primary z-50 px-6 py-10"
        >
          <div className="flex justify-between items-center mb-10">
            <Link href="/">
              <Image
                src="/Images/Logo.png"
                alt="ARC Dış Ticaret Logo"
                width={150}
                height={50}
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="text-white"
              aria-label="Menüyü kapat"
            >
              <FaTimes size={30} />
            </button>
          </div>

          {/* Menü Linkleri (Mobil) */}
          <div className="space-y-6 w-full flex flex-col items-start">
            <Link href="/" onClick={closeMenu}>
              <span
                className={`text-white text-lg hover:text-white/80 ${
                  router.pathname === "/" ? "underline" : ""
                }`}
              >
                Ana Sayfa
              </span>
            </Link>
            <Link href="/about" onClick={closeMenu}>
              <span
                className={`text-white text-lg hover:text-white/80 ${
                  router.pathname === "/about" ? "underline" : ""
                }`}
              >
                Hakkımızda
              </span>
            </Link>
            <Link href="/services" onClick={closeMenu}>
              <span
                className={`text-white text-lg hover:text-white/80 ${
                  router.pathname === "/services" ? "underline" : ""
                }`}
              >
                Hizmetlerimiz
              </span>
            </Link>
            <Link href="/products" onClick={closeMenu}>
              <span
                className={`text-white text-lg hover:text-white/80 ${
                  router.pathname === "/products" ? "underline" : ""
                }`}
              >
                Ürünler
              </span>
            </Link>
            <Link href="/references" onClick={closeMenu}>
              <span
                className={`text-white text-lg hover:text-white/80 ${
                  router.pathname === "/references" ? "underline" : ""
                }`}
              >
                Referanslar
              </span>
            </Link>
            <Link href="/blog" onClick={closeMenu}>
              <span
                className={`text-white text-lg hover:text-white/80 ${
                  router.pathname === "/blog" ? "underline" : ""
                }`}
              >
                Blog
              </span>
            </Link>
            <Link href="/ai-assistant" onClick={closeMenu}>
              <span
                className={`text-white text-lg hover:text-white/80 ${
                  router.pathname === "/ai-assistant" ? "underline" : ""
                }`}
              >
                Akıllı Asistan
              </span>
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              <span
                className={`text-white text-lg hover:text-white/80 ${
                  router.pathname === "/contact" ? "underline" : ""
                }`}
              >
                İletişim
              </span>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
