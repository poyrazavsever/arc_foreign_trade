import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons importu


const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image src="/Images/Logo.png" alt="ARC Dış Ticaret Logo" width={150} height={50} />
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-neutral-700">
            {isMenuOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>

        {/* Menü Linkleri (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <span className={`text-neutral-700 hover:text-secondary ${router.pathname === "/" ? "text-secondary" : ""}`}>
              Ana Sayfa
            </span>
          </Link>
          <Link href="/about">
            <span className={`text-neutral-700 hover:text-secondary ${router.pathname === "/about" ? "text-secondary" : ""}`}>
              Hakkımızda
            </span>
          </Link>
          <Link href="/services">
            <span className={`text-neutral-700 hover:text-secondary ${router.pathname === "/services" ? "text-secondary" : ""}`}>
              Hizmetlerimiz
            </span>
          </Link>
          <Link href="/products">
            <span className={`text-neutral-700 hover:text-secondary ${router.pathname === "/products" ? "text-secondary" : ""}`}>
              Ürünler
            </span>
          </Link>
          <Link href="/references">
            <span className={`text-neutral-700 hover:text-secondary ${router.pathname === "/references" ? "text-secondary" : ""}`}>
              Referanslar
            </span>
          </Link>
          <Link href="/blog">
            <span className={`text-neutral-700 hover:text-secondary ${router.pathname === "/blog" ? "text-secondary" : ""}`}>
              Blog
            </span>
          </Link>
          <Link href="/ai-assistant">
            <span className={`text-neutral-700 hover:text-secondary ${router.pathname === "/ai-assistant" ? "text-secondary" : ""}`}>
              Akıllı Asistan
            </span>
          </Link>
          <Link href="/contact">
            <span className={`text-neutral-700 hover:text-secondary ${router.pathname === "/contact" ? "text-secondary" : ""}`}>
              İletişim
            </span>
          </Link>
        </div>

        {/* Giriş Yap Butonu */}
        <Link href="/login" className="hidden md:block">
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
            Giriş Yap
          </button>
        </Link>
      </div>

      {/* Mobil Menü (Tam Ekran) */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 px-6 py-10 shadow-lg"
        >
          <div className="flex justify-between items-center mb-10">
            <Link href="/">
              <Image src="/Images/Logo.png" alt="ARC Dış Ticaret Logo" width={150} height={50} />
            </Link>
            <button onClick={toggleMenu} className="text-neutral-700">
              <FaTimes size={30} />
            </button>
          </div>

          {/* Menü Linkleri (Mobil) */}
          <div className="space-y-6 w-full flex flex-col items-start">
            <Link href="/">
              <span className={`text-neutral-700 text-lg hover:text-secondary ${router.pathname === "/" ? "text-secondary" : ""}`}>
                Ana Sayfa
              </span>
            </Link>
            <Link href="/about">
              <span className={`text-neutral-700 text-lg hover:text-secondary ${router.pathname === "/about" ? "text-secondary" : ""}`}>
                Hakkımızda
              </span>
            </Link>
            <Link href="/services">
              <span className={`text-neutral-700 text-lg hover:text-secondary ${router.pathname === "/services" ? "text-secondary" : ""}`}>
                Hizmetlerimiz
              </span>
            </Link>
            <Link href="/products">
              <span className={`text-neutral-700 text-lg hover:text-secondary ${router.pathname === "/products" ? "text-secondary" : ""}`}>
                Ürünler
              </span>
            </Link>
            <Link href="/references">
              <span className={`text-neutral-700 text-lg hover:text-secondary ${router.pathname === "/references" ? "text-secondary" : ""}`}>
                Referanslar
              </span>
            </Link>
            <Link href="/blog">
              <span className={`text-neutral-700 text-lg hover:text-secondary ${router.pathname === "/blog" ? "text-secondary" : ""}`}>
                Blog
              </span>
            </Link>
            <Link href="/ai-assistant">
              <span className={`text-neutral-700 text-lg hover:text-secondary ${router.pathname === "/ai-assistant" ? "text-secondary" : ""}`}>
                Akıllı Asistan
              </span>
            </Link>
            <Link href="/contact">
              <span className={`text-neutral-700 text-lg hover:text-secondary ${router.pathname === "/contact" ? "text-secondary" : ""}`}>
                İletişim
              </span>
            </Link>

            {/* Giriş Yap Butonu (Mobil) */}
            <Link href="/login" className="w-full">
              <button className=" bg-primary text-white w-full py-2 rounded-lg hover:bg-secondary transition mt-8">
                Giriş Yap
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
