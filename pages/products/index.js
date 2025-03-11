import Head from 'next/head';
import React from 'react'

import PopularProducts from '@/components/Products/PopularProducts'
import CustomerProducts from '@/components/Products/CustomerProducts'


const Products = () => {
  return (
    <>

    <Head>
      {/* 📌 Genel SEO Meta Etiketleri */}
      <title>Ürünler - ARC Foreign Trade - Müşterilerimizin Ürünleri</title>
      <meta
        name="description"
        content="ARC Foreign Trade olarak geniş ürün yelpazemizle global ticaretin ihtiyaçlarını karşılıyoruz. Ürünlerimiz hakkında detaylı bilgiye ulaşın."
      />
      <meta
        name="keywords"
        content="Ürünler, ARC Foreign Trade, ticaret ürünleri, teknoloji çözümleri, global ticaret, sanayi ürünleri, inovatif çözümler"
      />
      <meta name="author" content="ARC Foreign Trade" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://www.arcforeigntrade.com/urunler" />

      {/* 📌 Open Graph Meta Etiketleri (Facebook & LinkedIn) */}
      <meta property="og:title" content="Ürünler - ARC Foreign Trade" />
      <meta
        property="og:description"
        content="ARC Foreign Trade'in yenilikçi ve kaliteli ürünleriyle global ticaretteki yerinizi güçlendirin. Ürünlerimize göz atın ve işbirliği fırsatlarını keşfedin."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.arcforeigntrade.com/urunler" />
      <meta property="og:image" content="https://www.arcforeigntrade.com/assets/urunler.jpg" />
      <meta property="og:site_name" content="ARC Foreign Trade" />

      {/* 📌 Twitter Card Meta Etiketleri */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ürünler - ARC Foreign Trade" />
      <meta
        name="twitter:description"
        content="Global ticaretin ihtiyaçlarına göre tasarlanmış ürünlerimizi keşfedin. ARC Foreign Trade ile ticaretinizi büyütün."
      />
      <meta name="twitter:image" content="https://www.arcforeigntrade.com/assets/urunler.jpg" />
      <meta name="twitter:site" content="@arcforeigntrade" />

      {/* 📌 Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>

    
    <main>

      <PopularProducts />

      <CustomerProducts />
      
    </main>

    </>
  )
}

export default Products
