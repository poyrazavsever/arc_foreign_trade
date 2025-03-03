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
  İnternet sitenizle düzenli ilgileniyor musunuz?: ${answers.q3 ? 'Hayır' : 'Evet'}
  Sosyal medyanıza düzenli paylaşım yapıyor musunuz?: ${answers.q4 ? 'Hayır' : 'Evet'}
  Uluslararası B2B sitelerinde ilanlarınız mevcut mu?: ${answers.q5 ? 'Hayır' : 'Evet'}
  Ürünlerinizin ve işletmenizin düzenli fotoğrafları çekiliyor mu?: ${answers.q6 ? 'Hayır' : 'Evet'}
  Grafik tasarım yapan bir personeliniz var mı?: ${answers.q7 ? 'Hayır' : 'Evet'}
  Hedef pazarlarınızı belirlediniz mi?: ${answers.q8 ? 'Hayır' : 'Evet'}
  Yurtdışından en az günde 30 adet potansiyel müşteri buluyor musunuz?: ${answers.q9 ? 'Hayır' : 'Evet'}
  Yurtdışına en az günde 20 adet arama yapıyor musunuz?: ${answers.q10 ? 'Hayır' : 'Evet'}
  Yurtdışına en az günde 50 adet mail veya mesaj atıyor musunuz?: ${answers.q11 ? 'Hayır' : 'Evet'}
  İhracat pazarlaması için bünyenizde yabancı ekip arkadaşınız var mı?: ${answers.q12 ? 'Hayır' : 'Evet'}
  
  Bu şirketin eksiklikler, hedef ülkeler, pazarlama stratejileri ve çözüm önerileri ile birlikte değerlendirilmesi gerekiyor. Lütfen aşağıdaki noktalarla ilgili ayrıntılı bir rapor oluşturun:
  
  1. Eksiklikler (değerlendirme) - Şirketin eksik olduğu alanlar, örneğin: Yeterli sayıda potansiyel müşteri bulamama, sosyal medya yönetimi eksiklikleri, belirli pazarlara yönelik strateji eksiklikleri, vb.
  2. Ürün özelinde hedef ülkeler - Ürünlerinizi hangi ülkelere satmayı hedefliyorsunuz? Hedef ülkeleri neden seçtiniz? Hangi ülkelerde daha fazla talep olduğunu düşünüyorsunuz? Bu ülkelerin kültürel, ticari ve ekonomik yapıları nasıl?
  3. Ülke özelinde pazarlama stratejileri - Hedeflediğiniz ülkelerde pazarlama stratejileri nasıl olmalı? Yerel pazarlara uygun, etkili stratejiler nasıl geliştirilebilir? Hangi medya ve platformlar üzerinden tanıtım yapılmalı?
  4. Çözüm önerileri
      4.1 - Reklam: Müşterilerinizi bulmanız için nasıl bir reklam stratejisi izlenmeli? Dijital reklamlar, influencer işbirlikleri, yerel medya kullanımı gibi stratejilerle tanıtım yapılabilir.
      4.2 - Pazarlama: Yabancı ekip arkadaşlarınızın kültürel birikimleri ile hedef pazarlarda nasıl nokta atışı müşteri bulunabilir? Yabancı pazarlar için hangi yöntemler daha etkili olabilir? Örneğin, yerel etkinliklere katılım, yerel işbirlikleri veya kültürel farkındalık ile doğru müşteriye ulaşmak.
  
  Lütfen yukarıdaki noktalarla ilgili detaylı bir rapor sunun ve şirketin gelecekteki büyümesi için en uygun stratejileri belirleyin.
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
