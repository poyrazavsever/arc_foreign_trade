import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image src="/Images/Logo.png" alt="ARC Dış Ticaret Logo" width={150} height={50} />
        </Link>

        {/* Menü Linkleri */}
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
        <Link href="/login">
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
            Giriş Yap
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
