import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image src="/Images/Logo.png" alt="ARC Dış Ticaret Logo" width={150} height={50} />
        </Link>

        {/* Menü Linkleri */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-neutral-700 hover:text-secondary">Ana Sayfa</Link>
          <Link href="/about" className="text-neutral-700 hover:text-secondary">Hakkımızda</Link>
          <Link href="/services" className="text-neutral-700 hover:text-secondary">Hizmetlerimiz</Link>
          <Link href="/products" className="text-neutral-700 hover:text-secondary">Ürünler</Link>
          <Link href="/references" className="text-neutral-700 hover:text-secondary">Referanslar</Link>
          <Link href="/blog" className="text-neutral-700 hover:text-secondary">Blog</Link>
          <Link href="/ai-assistant" className="text-neutral-700 hover:text-secondary">Akıllı Asistan</Link>
          <Link href="/contact" className="text-neutral-700 hover:text-secondary">İletişim</Link>
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
