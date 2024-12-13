import React from 'react';
import { FaHome, FaBell, FaBuilding, FaUser } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="relative bg-blue-900 text-white p-4">
        <h1 className="text-lg font-bold">HAI WARGA PARAMADINA!</h1>
        <p>Mau kemana nih?</p>
        <div className="absolute top-4 right-4">
          <button className="bg-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21l-2-2m0 0l2-2m-2 2h12M4 6l2-2m0 0l2 2M6 4v16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Gedung Kampus</h2>

        {/* Campus Cards */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src="/campus-cipayung.jpg"
              alt="Kampus Cipayung"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Kampus Cipayung</h3>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src="/campus-cikarang.jpg"
              alt="Kampus Cikarang"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Kampus Cikarang</h3>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="w-full h-40 bg-gray-200 flex justify-center items-center">
              <span className="text-gray-500">Kampus Kuningan</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Kampus Kuningan</h3>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Notifikasi</h2>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-600">
            <p className="text-gray-700 text-sm">
              <span className="font-bold text-red-600">⚠ Toilet Gedung C dan D sedang dalam perbaikan</span>, untuk sementara gunakan toilet Gedung A.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-between items-center p-2">
        <button className="flex flex-col items-center text-blue-900">
          <FaHome className="text-2xl" />
          <span className="text-xs">Menu Utama</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <FaBell className="text-2xl" />
          <span className="text-xs">Notifikasi</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <FaBuilding className="text-2xl" />
          <span className="text-xs">Fasilitas</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <FaUser className="text-2xl" />
          <span className="text-xs">Profil</span>
        </button>
      </div>
    </div>
  );
}
