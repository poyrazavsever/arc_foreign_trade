import Head from "next/head";
import CardSection from "@/components/Home/CardSection";
import HeroSection from "@/components/Home/HeroSection";
import LastSection from "@/components/Home/LastSection";
import Logos from "@/components/Home/Logos";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <div>
      {/* SEO Başlık ve Meta Bilgileri */}
      <Head>
        <title>Markanızı Büyütün | ARC Foreign Trade | Dijital Pazarlama ve Dış Ticaret Çözümleri</title>
        <meta name="description" content="Dijital pazarlama, ihracat ve ithalat süreçlerinizde profesyonel destek alarak markanızı global pazarlara taşıyın. Stratejik çözümlerimizle işinizi büyütün!" />
        <meta name="keywords" content="dijital pazarlama, dış ticaret, ihracat, ithalat, marka yönetimi, e-ticaret, SEO, global pazarlama" />
        <meta name="author" content="ARC Foreign Trade" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph (Sosyal Medya Paylaşımları için) */}
        <meta property="og:title" content="Markanızı Büyütün | Dijital Pazarlama ve Dış Ticaret Çözümleri" />
        <meta property="og:description" content="Dijital pazarlama ve dış ticaret çözümlerimizle markanızı uluslararası arenaya taşıyın!" />
        <meta property="og:image" content="/Images/hero1.jpg" />
        <meta property="og:url" content="https://www.arcforeigntrade.com" />
        <meta property="og:type" content="website" />

      </Head>

      <HeroSection />
      <Logos />
      <CardSection />
      <Services />
      <LastSection />
    </div>
  );
}
