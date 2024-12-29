'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import TpRachmant from '@/png/tprachmat.svg';
import Rumah from '@/png/rumah.png';
import Notif from '@/png/notif.png';
import Gedung from '@/png/gedung.png';
import Profil from '@/png/profil.png';
import kelazz from '@/png/classroom.svg';
import Kaca from '@/png/Untitled.png';
import BackButton from '@/png/backbutton.svg';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

export default function NurcholisPage() {
   const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-background_secondary h-screen overflow-y-auto pb-20 flex flex-col">
      {/* Tombol Search dan back */}
      <div className="flex justify-between p-4 ">
        <button className=" ">
          <Image src={BackButton} alt="backbutton" width={30} height={30} />
          back 
        </button>

        <button className="">
          <Image src={Kaca} alt="search icon" width={30} height={30} />
        </button>
      </div>


     {/* Header */}
      <div className=" bg-background-secondary flex justify-center items-center">
        <h1 className="text-xl font-bold">H.M Jusuf Kala</h1>
      </div>


      {/* Gambar Gedung */}
      <div className="flex justify-center p-4">
        <Image
          src={TpRachmant}
          alt="tprachmat"
          className="w-[384px] rounded-lg"
          priority
        />
      </div>

      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
      {/* Tabs Lantai */}
      <p className='flex px-8 mb-2 font-medium'>LIST KELAS</p>
      <TabList>

      <div className="flex justify-center gap-5 mb-10">
        <Tab className={`px-4 py-2 rounded-lg ${
            activeTab === 0 ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
          onClick={() => setActiveTab(1)}>
          LANTAI 1
        </Tab>
        <Tab className={`px-4 py-2 rounded-lg ${
            activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
          onClick={() => setActiveTab(1)}>
          LANTAI 2
        </Tab>
        <Tab className={`px-4 py-2 rounded-lg ${
            activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
          onClick={() => setActiveTab(1)}>
          LANTAI 3
        </Tab>
      </div>
      </TabList>
      <TabPanel>


        {/* lantai 1 */}
      <div className="flex-1 px-4 space-y-3">
        {[
          'D1-1',
          'D1-2',
          'D1-3',
          'D1-4',
          'D1-5',
          'D1-6',
          'D1-7',
          'D1-8',
          'D1-9',
        ].map((kelas) => (
          <div
            key={kelas}
            className="flex justify-between items-center border-2 border-blue-500 rounded-lg p-4 bg-white"
          >
            <div className="flex items-center gap-3">
              <Image src={kelazz} alt="classroom.svg" className="" />
              <p className="font-semibold text-lg">{kelas}</p>
            </div>
            <a
              href="#"
              className="text-blue-500 underline flex items-center gap-1"
            >
              Detail ↗
            </a>
          </div>
        ))}
      </div>
      </TabPanel>
      <TabPanel>
        {/* lantai 2 */}
<h1></h1>
      <div className="flex-1 px-4 space-y-3">
        {[
          'D2-1',
          'D2-2',
          'D2-3',
          'D2-4',
          'D2-5',
          'D2-6',
          'D2-7',
          'D2-8',
          'D2-9',
        ].map((kelas) => (
          <div
            key={kelas}
            className="flex justify-between items-center border-2 border-blue-500 rounded-lg p-4 bg-white"
          >
            <div className="flex items-center gap-3">
              <Image src={kelazz} alt="classroom.svg" className="" />
              <p className="font-semibold text-lg">{kelas}</p>
            </div>
            <a
              href="#"
              className="text-blue-500 underline flex items-center gap-1"
            >
              Detail ↗
            </a>
          </div>
        ))}
      </div>
      </TabPanel>
      <TabPanel>
<h1></h1>

{/* lantai tiga */}
      <div className="flex-1 px-4 space-y-3">
        {[
          'D3-1',
          'D3-2',
          'D3-3',
          'D3-4',
          'D3-5',
          'D3-6',
          'D3-7',
          'D3-8',
          'D3-9',
        ].map((kelas) => (
          <div
            key={kelas}
            className="flex justify-between items-center border-2 border-blue-500 rounded-lg p-4 bg-white"
          >
            <div className="flex items-center gap-3">
              <Image src={kelazz} alt="classroom.svg" className="" />
              <p className="font-semibold text-lg">{kelas}</p>
            </div>
            <a
              href="#"
              className="text-blue-500 underline flex items-center gap-1"
            >
              Detail ↗
            </a>
          </div>
        ))}
      </div>
      </TabPanel>
      {/* List Kelas */}
</Tabs>

      {/* Bottom Navigation */}
      <div className="fixed bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg flex justify-between items-center px-2">
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
      </div>
    </div>
  );
}
