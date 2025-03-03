import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-hot-toast"; // React Hot Toast ekliyoruz

const AiAssistant = () => {
  const [answers, setAnswers] = useState({
    Soru1: "",
    Soru2: "",
    Soru3: "",
    Soru4: "",
    Soru5: "",
    Soru6: "",
    Soru7: "",
    Soru8: "",
    Soru9: "",
    Soru10: "",
    Soru11: "",
    Soru12: "",
  });

  const questions = [
    "Ne satıyorsunuz?",
    "Üretici misiniz Satıcı mı?",
    "İnternet sitenizle düzenli ilgileniyor musunuz?",
    "Sosyal medyanıza düzenli paylaşım yapıyor musunuz?",
    "Uluslararası B2B sitelerinde ilanlarınız mevcut mu?",
    "Ürünlerinizin ve işletmenizin düzenli fotoğrafları çekiliyor mu?",
    "Grafik tasarım yapan bir personeliniz var mı?",
    "Hedef pazarlarınızı belirlediniz mi?",
    "Yurtdışından en az günde 30 adet potansiyel müşteri buluyor musunuz?",
    "Yurtdışına en az günde 20 adet arama yapıyor musunuz?",
    "Yurtdışına en az günde 50 adet mail veya mesaj atıyor musunuz?",
    "İhracat pazarlaması için bünyenizde yabancı ekip arkadaşınız var mı?",
  ];

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Eksik cevapları kontrol etme
    const incompleteAnswers = Object.keys(answers).filter(
      (key) => answers[key] === ""
    );

    if (incompleteAnswers.length > 0) {
      // Eksik cevapları kullanıcıya bildirmek için toast mesajları
      incompleteAnswers.forEach((answer) => {
        toast.error(`Lütfen "${answer}" sorusunu cevaplayın.`);
      });
    } else {
      // Eğer tüm cevaplar doluysa, verileri gönderme
      toast.success("Form başarıyla gönderildi!");
      console.log("Veriler Gönderildi:", answers);
      // Burada Gemini API'ye istek atacağız
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 border border-neutral-200 rounded mt-48">
      <div className="flex flex-col items-start gap-2 mb-6 ">
        <h1 className="text-3xl font-bold text-left text-primary">Akıllı Asistan</h1>
        <p className="text-neutral-500">Yapay zeka destekli danışmanımıza hoş geldiniz!</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col gap-4 w-full">
          <label className="font-medium text-lg">1- Ne satıyorsunuz?</label>
          <input
            type="text"
            name="q1"
            value={answers.q1}
            onChange={handleChange}
            className="border p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-medium text-lg">2- Üretici misiniz Satıcı mı?</label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="q2"
                value="Üretici"
                checked={answers.q2 === "Üretici"}
                onChange={handleChange}
              />
              Üretici
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="q2"
                value="Satıcı"
                checked={answers.q2 === "Satıcı"}
                onChange={handleChange}
              />
              Satıcı
            </label>
          </div>
        </div>

        {questions.slice(2).map((question, index) => (
          <div key={index} className="flex flex-col gap-3">
            <label className="font-medium text-lg">{index + 3}- {question}</label>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`q${index + 3}`}
                  value="Evet"
                  checked={answers[`q${index + 3}`] === "Evet"}
                  onChange={handleChange}
                />
                Evet
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`q${index + 3}`}
                  value="Hayır"
                  checked={answers[`q${index + 3}`] === "Hayır"}
                  onChange={handleChange}
                />
                Hayır
              </label>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 bg-primary text-white px-5 py-3 rounded-lg shadow-md hover:bg-secondary transition duration-300 mt-8"
        >
          <FaPaperPlane /> Gönder
        </button>
      </form>
    </div>
  );
};

export default AiAssistant;
