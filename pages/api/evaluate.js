import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // req.body içeriğini loglayarak kontrol edin
  console.log("Gelen Body: ", req.body);

  const { answers } = req.body;
  if (!answers || Object.keys(answers).length === 0) {
    return res.status(400).json({ error: 'Yanıtlar boş olamaz' });
  }


  // Gemini için değerlendirme prompt'u oluşturuyoruz
  const evaluationPrompt = `
    Aşağıdaki şirket ile ilgili değerlendirme yapılacak:

    Ne satıyorsunuz?: ${answers.q1}
    Üretici misiniz, Satıcı mı?: ${answers.q2 ? 'Üretici' : 'Satıcı'}
    İnternet sitenizle düzenli ilgileniyor musunuz?: ${answers.q3 ? 'Evet' : 'Hayır'}
    Sosyal medyanıza düzenli paylaşım yapıyor musunuz?: ${answers.q4 ? 'Evet' : 'Hayır'}
    Uluslararası B2B sitelerinde ilanlarınız mevcut mu?: ${answers.q5 ? 'Evet' : 'Hayır'}
    Ürünlerinizin düzenli fotoğrafları çekiliyor mu?: ${answers.q6 ? 'Evet' : 'Hayır'}
    Grafik tasarım yapan bir personeliniz var mı?: ${answers.q7 ? 'Evet' : 'Hayır'}
    Hedef pazarlarınızı belirlediniz mi?: ${answers.q8 ? 'Evet' : 'Hayır'}
    Yurtdışından günde 30 potansiyel müşteri buluyor musunuz?: ${answers.q9 ? 'Evet' : 'Hayır'}
    Yurtdışına günde 20 arama yapıyor musunuz?: ${answers.q10 ? 'Evet' : 'Hayır'}
    Yurtdışına günde 50 mail veya mesaj atıyor musunuz?: ${answers.q11 ? 'Evet' : 'Hayır'}
    İhracat pazarlaması için yabancı ekip arkadaşınız var mı?: ${answers.q12 ? 'Evet' : 'Hayır'}

    Bu şirketin eksiklikler, hedef ülkeler, pazarlama stratejileri ve çözüm önerileri ile birlikte değerlendirilmesi gerekiyor. 
    Lütfen aşağıdaki noktalarla ilgili ayrıntılı bir rapor oluşturun:

    1. Eksiklikler (değerlendirme) - Şirketin eksik olduğu alanlar
    2. Ürün özelinde hedef ülkeler - Hedef ülkelerin nedenleri
    3. Ülke özelinde pazarlama stratejileri
    4. Çözüm önerileri
    4.1 - Reklam: Müşteri sizi bulsun
    4.2 - Pazarlama: Yabancı ekip arkadaşlarımız kültürel birikimleriyle nokta atışı müşteri bulsun ve iletişime geçsin
  `;

  try {
    const genAI = new GoogleGenerativeAI("AIzaSyBfL_VUTrUXYYegZaz5xcPrY1HcaZF4X4k");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Gemini API'ye değerlendirme yapması için veri gönderiyoruz
    const result = await model.generateContent(evaluationPrompt);
    console.log("API Yanıtı: ", result); // Burada result'ı detaylı şekilde loglayın

    // API yanıtını alırken .text() fonksiyonunu çağırıyoruz
    const responseText = await result.response.text(); // Fonksiyon çalıştırılmalı
    if (!responseText) {
      console.log("API yanıtı boş döndü");
      return res.status(400).json({ error: 'API yanıtı boş geldi' });
    }

    res.status(200).json({ result: responseText });

  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: `Gemini API hatası: ${error.message || "Bilinmeyen hata"}` });
  }
}
