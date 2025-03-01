import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="bg-blue-100 text-blue-800 p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold">Çok Yakında</h2>
        </div>
        <p className="text-lg text-gray-600 mb-4">
          Şu an üzerinde çalışıyoruz! Bu özellik çok yakında sizlerle olacak.
        </p>
        <a href='/contact'>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            İletişme Geç
            </button>
        </a>
      </div>
    </div>
  );
};

export default Login;
