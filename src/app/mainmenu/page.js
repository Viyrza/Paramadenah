'use client';

import React from 'react';
import Image from 'next/image';
import Cipayung from '@/png/cipayung.png';
import TpRachmat from '@/png/tprachmat.svg';
import Kaca from '@/png/Untitled.png';
import Hero from '@/png/herooo.svg';
import JusufKala from '@/png/jusufkala.svg';
import BackButton from '@/png/backbutton.svg';
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

        {/* Tombol Search dan back */}
        <div className="absolute top-8 right-4 z-10">
          <button className="bg-white p-1 rounded shadow-md">
            <Image src={Kaca} alt="Search Icon" width={20} height={20} />
          </button>
        </div>


        <div className="absolute top-8 left-4 z-10">
          <button className="">
            <Link href="/Homescreen">
            <Image src={BackButton} alt="backbutton" width={30} height={30} />
            </Link>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 ">
        {/* Campus Cards */}
        <div className="space-y-6">
          <div className="relative">
            <Link href="/KelasGedungA">
              <Image
                src={Cipayung}
                alt="gedunga"
                width={384}
                height={153}
                priority={true}
                quality={100}
                className=" w-full object-cover"
              />
            </Link>

            <h3 className="bg-blue-500 opacity-80 rounded-lg absolute bottom-0 right-0 w-[189px] h-auto pr-3 text-left text-lg font-semibold text-white">
              GEDUNG NURCHOLIS MADJID
            </h3>
          </div>

          <div className="relative">
            <Link href="/KelasGedungC">
            <Image
              src={TpRachmat}
              alt="tprachmat"
              width={384}
              height={153}
              priority={true}
              quality={100}
              className=" w-full object-cover"
              />
              </Link>
            <h3 className="bg-blue-500 opacity-80 rounded-lg absolute bottom-0 right-0 w h-auto pr-3 text-left text-lg font-semibold text-white">
              GEDUNG TP RACHMAT
            </h3>
          </div>
          <div className="relative">
            <Image
              src={JusufKala}
              alt="jusufkala"
              width={384}
              height={153}
              priority={true}
              quality={100}
              className=" w-full object-cover"
            />
            <h3 className="bg-blue-500 opacity-80 rounded-lg absolute bottom-0 right-0  h-auto pr-3 text-left text-lg font-semibold text-white">
              GEDUNG H.M JUSUF KALA
            </h3>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      {/* <div className="fixed bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg flex justify-between items-center px-2">
        <button className="flex flex-col items-center text-blue-900">
          <Image src={Rumah} alt="rumah" className="text-2xl" />
          <span className="text-xs">Menu Utama</span>
        </button>
        <button className="flex flex-col items-center text-black">
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
