import Head from 'next/head';
import Company from '@/components/References/Company';
import Testimonials from '@/components/References/Testimonials';
import React from 'react';

const References = () => {
  return (
    <>
      <Head>
        {/* Genel Sayfa Meta Bilgileri */}
        <title>Referanslarımız - ARC Foreign Trade</title>
        <meta name="description" content="ARC Foreign Trade'in müşteri yorumları ve iş ortakları hakkında bilgi edinin. Güvenilir referanslarımızla ticari başarımızı keşfedin." />
        <meta name="keywords" content="referanslar, müşteri yorumları, iş ortakları, ticari işbirlikleri, güvenilir firma, ARC Foreign Trade" />
        <meta name="author" content="ARC Foreign Trade" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.arcforeigntrade.com/references" />

        {/* Open Graph Meta Etiketleri (Facebook & LinkedIn) */}
        <meta property="og:title" content="Referanslarımız - ARC Foreign Trade" />
        <meta property="og:description" content="ARC Foreign Trade'in iş ortakları ve müşteri referansları hakkında detaylı bilgi edinin. Güvenilir iş ilişkileri kurarak ticaretinizi geliştirin." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arcforeigntrade.com/references" />
        <meta property="og:image" content="https://www.arcforeigntrade.com/assets/references.jpg" />
        <meta property="og:site_name" content="ARC Foreign Trade" />

        {/* Twitter Card Meta Etiketleri */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Referanslarımız - ARC Foreign Trade" />
        <meta name="twitter:description" content="Müşteri yorumlarımızı ve iş ortaklarımızı keşfedin. ARC Foreign Trade ile güvenilir ticari ilişkiler kurun." />
        <meta name="twitter:image" content="https://www.arcforeigntrade.com/assets/references.jpg" />
        <meta name="twitter:site" content="@arcforeigntrade" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mt-48'>
        { /*<Testimonials />*/ } 
        <Company />
      </main>
    </>
  );
};

export default References;
