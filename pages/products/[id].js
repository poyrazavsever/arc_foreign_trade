import { useRouter } from "next/router";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

const products = [
  {
    id: "1",
    name: "Ürün 1",
    category: "Elektronik",
    image: "/Images/product.jpg",
    description: "Bu ürün yüksek performanslı bir elektronik cihazdır.",
    specs: {
      "Güç Tüketimi": "50W",
      "Boyutlar": "10x20x30 cm",
      "Ağırlık": "1.5 kg",
    },
    contact: {
      phone: "+90 555 123 45 67",
      email: "info@example.com",
      social: "@examplecompany",
    },
  },
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === id);

  if (!product) return <p className="text-center text-red-500">Ürün bulunamadı</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-32 text-gray-900">
      <h1 className="text-4xl font-bold text-blue-800">{product.name}</h1>
      <p className="text-lg text-gray-600">{product.category}</p>
      
      <div className="mt-6 flex items-center justify-center">
        <div className="rounded-lg overflow-hidden">
          <Image src={product.image} alt={product.name} width={700} height={450} className="object-cover" />
        </div>
      </div>
      
      <p className="mt-6 text-lg leading-relaxed">{product.description}</p>
      
      <h2 className="mt-8 text-2xl font-semibold text-blue-800">Teknik Bilgiler</h2>
      <table className="mt-4 w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
        <tbody>
          {Object.entries(product.specs).map(([key, value]) => (
            <tr key={key} className="border-b bg-gray-100 even:bg-gray-200">
              <td className="p-3 font-medium border-r text-blue-800">{key}</td>
              <td className="p-3">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <h2 className="mt-8 text-2xl font-semibold text-blue-800">İletişim</h2>
      <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-800 rounded-lg">
            <a href={`tel:${product.contact.phone}`} className="flex items-center gap-2 text-lg text-blue-800 hover:underline">
                <FaPhone className="text-blue-800" /> {product.contact.phone}
            </a>
            <a href={`mailto:${product.contact.email}`} className="flex items-center gap-2 text-lg mt-2 text-blue-800 hover:underline">
                <FaEnvelope className="text-blue-800" /> {product.contact.email}
            </a>
            <a href={`https://instagram.com/${product.contact.social.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg mt-2 text-blue-800 hover:underline">
                <FaInstagram className="text-blue-800" /> {product.contact.social}
            </a>
      </div>
    </div>
  );
}
