import Head from 'next/head';
import Populars from '@/components/Services/Populars';
import Dijital from '@/components/Services/Dijital';
import Marketing from '@/components/Services/Marketing';
import Operation from '@/components/Services/Operation';
import React from 'react';

const Services = () => {
  return (
    <>
      <Head>
        {/* 📌 Genel SEO Meta Etiketleri */}
        <title>Hizmetlerimiz - ARC Foreign Trade</title>
        <meta
          name="description"
          content="ARC Foreign Trade'in sunduğu popüler hizmetler, dijital çözümler, pazarlama stratejileri ve operasyonel destek hakkında detaylı bilgi alın."
        />
        <meta
          name="keywords"
          content="hizmetler, popüler hizmetler, dijital çözümler, pazarlama stratejileri, operasyonel destek, ARC Foreign Trade"
        />
        <meta name="author" content="ARC Foreign Trade" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.arcforeigntrade.com/services" />

        {/* 📌 Open Graph Meta Etiketleri (Facebook & LinkedIn) */}
        <meta property="og:title" content="Hizmetlerimiz - ARC Foreign Trade" />
        <meta
          property="og:description"
          content="Popüler hizmetlerimiz, dijital çözümlerimiz ve operasyonel destek hizmetlerimizle işinizi büyütün. ARC Foreign Trade ile çalışmanın avantajlarını keşfedin!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arcforeigntrade.com/services" />
        <meta property="og:image" content="https://www.arcforeigntrade.com/assets/services.jpg" />
        <meta property="og:site_name" content="ARC Foreign Trade" />

        {/* 📌 Twitter Card Meta Etiketleri */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hizmetlerimiz - ARC Foreign Trade" />
        <meta
          name="twitter:description"
          content="İşinizi büyütmek için sunduğumuz hizmetleri keşfedin: Popüler hizmetler, dijital çözümler, pazarlama stratejileri ve operasyonel destek."
        />
        <meta name="twitter:image" content="https://www.arcforeigntrade.com/assets/services.jpg" />
        <meta name="twitter:site" content="@arcforeigntrade" />

        {/* 📌 Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mt-16'>
          <Populars />
          <Dijital />
          <Marketing />
          <Operation />
      </main>
    </>
  );
};

export default Services;
