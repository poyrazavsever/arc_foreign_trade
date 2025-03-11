import Head from 'next/head';
import React from 'react';
import MainSection from '@/components/About/MainSection';
import Team from '@/components/About/Team';
import OurValues from '@/components/About/OurValues';

const About = () => {
  return (
    <>

      <Head>
        {/* 📌 Genel SEO Meta Etiketleri */}
        <title>Hakkımızda - ARC Foreign Trade - Bizi Tercih Edin!</title>
        <meta
          name="description"
          content="ARC Foreign Trade olarak sektördeki yenilikçi yaklaşımımızla, global ticaret çözümleri sunuyoruz. Hakkımızda daha fazla bilgi alın ve vizyonumuzu keşfedin."
        />
        <meta
          name="keywords"
          content="Hakkımızda, ARC Foreign Trade, ticaret çözümleri, iş stratejileri, global ticaret, teknoloji çözümleri, yenilikçi yaklaşım"
        />
        <meta name="author" content="ARC Foreign Trade" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.arcforeigntrade.com/hakkimizda" />

        {/* 📌 Open Graph Meta Etiketleri (Facebook & LinkedIn) */}
        <meta property="og:title" content="Hakkımızda - ARC Foreign Trade" />
        <meta
          property="og:description"
          content="ARC Foreign Trade olarak yenilikçi ticaret çözümleriyle global pazarda etkili çözümler sunuyoruz. Hakkımızda daha fazla bilgiye ulaşın ve bize katılın."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arcforeigntrade.com/hakkimizda" />
        <meta property="og:image" content="https://www.arcforeigntrade.com/assets/hakkimizda.jpg" />
        <meta property="og:site_name" content="ARC Foreign Trade" />

        {/* 📌 Twitter Card Meta Etiketleri */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hakkımızda - ARC Foreign Trade" />
        <meta
          name="twitter:description"
          content="ARC Foreign Trade'in yenilikçi ticaret çözümleri ve vizyonu hakkında daha fazla bilgiye ulaşın. Global ticaretin geleceğini şekillendiriyoruz."
        />
        <meta name="twitter:image" content="https://www.arcforeigntrade.com/assets/hakkimizda.jpg" />
        <meta name="twitter:site" content="@arcforeigntrade" />

        {/* 📌 Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

        

        <main>
          <MainSection />

          <Team />

          <OurValues />
        </main>
    
    </>
  );
};

export default About;