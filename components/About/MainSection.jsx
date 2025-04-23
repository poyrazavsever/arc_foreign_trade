import React from 'react'

const MainSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sol Bölüm: Bizi Tanıyın */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Bizi Tanıyın</h2>
            <h3 className="text-2xl font-semibold text-gray-700">Biz Kimiz?</h3>
            <p className="text-gray-600">
              ARC Danışmanlık, size global pazarlarda hızlı ve etkili bir büyüme yolculuğu sunmak için her ülkede uzmanlaşmış, deneyimli bir ekip sunar. Ekibimiz, Avrupa, Asya ve Afrika'dan gelen yerel bilgiye sahip profesyonellerden oluşur ve her bir ekip üyesi, kendi bölgesindeki kültürel ve ticari dinamikleri iyi bilen bir uzmandır. Bu sayede, her pazara özel stratejiler geliştirir ve firmanızın yerel ihtiyaçları ile küresel hedeflerine uyum sağlayan çözümler sunarız.
            </p>
            <p className="text-gray-600">
              Genç ve dinamik ekibimiz sayesinde, her ülkedeki pazarın gereksinimlerine göre yenilikçi, esnek ve etkili çözümler üretiyoruz. Yerel bilgilere dayalı olarak oluşturduğumuz hedef pazar raporları ve analizler ile, küresel arenada güçlü bir kimlik inşa etmenize yardımcı oluyoruz. Sadece küresel pazarda varlık göstermekle kalmaz, aynı zamanda her pazarda markanızı en güçlü şekilde konumlandırır ve hedef kitlenizle daha derin ve etkili bağlar kurmanızı sağlarız.
            </p>
            <p className="text-gray-600">
              ARC Danışmanlık, markanızın global kimliğini güçlendirirken, sizi yerel pazarlarda da doğru konumlandırarak uzun vadeli başarılar elde etmenize yardımcı olur.
            </p>
            <div className="flex justify-center space-x-4">
              <img src="/Images/herosection.jpg" alt="About Image 2" objectFit="cover"  className="w-full"/>
            </div>
          </div>

          {/* Sağ Bölüm: Bizi Tercih Edin */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Bizi Tercih Edin</h2>
            <h3 className="text-2xl font-semibold text-gray-700">Neden Biz?</h3>
            <p className="text-gray-600">
              ARC Danışmanlık olarak, global pazarlarda hızla büyümenizi sağlamak için her ülkenin yerel dinamiklerine hakim, deneyimli bir ekip sunuyoruz. Ekibimiz, Avrupa, Asya ve Afrika'dan gelen uzmanlarla birleşerek her pazara özel stratejiler geliştirir ve firmanızın küresel hedeflerine uygun çözümler üretir.
            </p>
            <p className="text-gray-600">
              Genç ve dinamik ekibimiz, her ülkenin pazar gereksinimlerine göre yenilikçi ve esnek çözümler sunar. Yerel bilgiye dayalı oluşturduğumuz hedef pazar raporları ve analizler, küresel pazarda güçlü bir kimlik inşa etmenize yardımcı olur. Sadece global arenada varlık göstermekle kalmaz, her pazarda markanızı en etkili şekilde konumlandırarak hedef kitlenizle daha derin bağlar kurmanızı sağlarız.
            </p>
            <p className="text-gray-600">
              ARC Danışmanlık, markanızı global pazarlarda güçlendirirken yerel pazarlarda doğru bir şekilde konumlandırmanıza yardımcı olur. Uzun vadeli başarınız için stratejik çözümler ve güçlü bir işbirliği sunuyoruz.
            </p>
            <div className="flex justify-center space-x-4">
              <img src="/Images/lastImage.jpeg" alt="About Image 4" objectFit="cover" className="w-full rounded shadow-lg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
