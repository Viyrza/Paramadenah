'use client';

import React from 'react';
import Image from 'next/image';

import Cipayung from '@/png/cipayung.png';
import Cikarang from '@/png/cikarang.png';
import Kaca from '@/png/Untitled.png';
import Hero from '@/png/herooo.svg';
import Kuningan from '@/png/kuningann.svg';
import Toilet from '@/png/toilet.png'
import Link from 'next/link';



export default function Home() {

  return (
    <div className="pb-20 h-screen overflow-y-auto bg-[#D4D4D4]">
      {/* Header */}
      <div className="relative w-full h-[240px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={Hero}
            alt="hero"
            priority={true} 
            quality={100}
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
          {/* Overlay Gradient */}
        </div>

        {/* Teks Hero */}
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 ">
          <h1 className="text-white text-lg font-semibold">
            HAI WARGA PARAMADINA !<br/>MAU KEMANA NIH ?
          </h1>
        </div>

          {/* Tombol Search */}
          <div className="absolute top-8 right-4 z-10">
            <button className="bg-white p-1 rounded shadow-md">
              <Image src={Kaca} alt="Search Icon" width={20} height={20} />
            </button>
          </div>
        </div>

      {/* Content */}
      <div className="p-4 ">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Gedung Kampus</h2>

        {/* Campus Cards */}
        <div className=" ">
     <Link href="/mainmenu">
            <Image
              src={Cipayung}
              alt="cipayung"
              width={384}
              height={153}
              priority={true}
              quality={100}   
              className="w-full object-cover"
              ></Image>            
            <div className="-translate-y-10">
              <h3 className="pr-3 text-end text-lg font-semibold text-white">
                KAMPUS CIPAYUNG
              </h3>
            </div>
     </Link>

            <Image
              src={Cikarang}
              alt="cikarang"
              width={384}
              height={153}
              priority={true}
              quality={100}   
              className="w-full object-cover"
            />
            <div className="-translate-y-10">
              <h3 className="pr-3 text-end text-lg font-semibold text-white">
                KAMPUS CIKARANG
              </h3>
            </div>


              <Image 
              src={Kuningan}
              alt="kuningann"
              width={384}
              height={153}
              className="w-full object-cover"
              />
            <div className='-translate-y-10'>
              <h3 className="pr-3 text-end text-lg font-semibold text-white">
                KAMPUS TRINITY
              </h3>
              </div>
        
        </div>

        {/* Notifications */}
        <div className="mt-0">
          <div className="flex bg-white p-5 rounded-lg border-2 border-red-600">
            <Image
            src={Toilet}
            alt="toilet"
            height={10}
            width={40}
            className='flex shrink-0'
            /><p className="ml-4 text-black font-semibold text-[11px]">
              Toilet Gedung C dan D sedang dalam perbaikan untuk sementara gunakan toilet Gedung A. 
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      {/* <div className="fixed bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg flex justify-between items-center px-2">
        <button className="flex flex-col items-center text-blue-900">
          <Image src={Rumah} alt="rumah" className="text-2xl" />
          <span className="text-xs">Menu Utama</span>
        </button>
        <button className="flex flex-col items-center text-black ">
          <Image src={Notif} alt="notif" className="text-2xl" />
          <span className="text-xs">Notifikasi</span>
        </button>
        <button className="flex flex-col items-center text-black">
          <Image src={Gedung} alt="gedung" className="text-2xl" />
          <span className="text-xs">Fasilitas</span>
        </button>
        <button className="flex flex-col items-center text-black">
          <Image src={Profil} alt="profil" className="text-2xl" />
          <span className="text-xs">Profil</span>
        </button>
      </div> */}
    </div>
  );
}
