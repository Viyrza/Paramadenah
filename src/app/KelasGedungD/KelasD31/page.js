'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
  import Kelas from '@/png/classroom.svg';
import TIPI from '@/png/tv.svg';
import PapanTulis from '@/png/papantulis.svg';
import Meja from '@/png/meja.svg';
import BackButton from '@/png/backbutton.svg';
import Rumah from '@/png/rumah.png';
import Notif from '@/png/notif.png';
import Gedung from '@/png/gedung.png';
import Profil from '@/png/profil.png';
import ArrowUp from '@/png/DoubleUp.svg';
import DenahD31 from '@/png/DenahD31.png';
import gsap from 'gsap';
import { useEffect, useMemo } from 'react';

import Carousel from '@/components/ui/caraousel';

const mockDataImage = [
  {
    id: 1, 
    url: "/images/D31.png",
    alt: "placeholder image 1"
  },
  { 
    id: 2, 
    url: "/images/D241.png",
    alt: "placeholder image 1"
  },
  {
    id: 3, 
    url: "/images/D242.png",
    alt: "placeholder image 1"
  },
  {
    id: 4, 
    url: "/images/D243.png",
    alt: "placeholder image 1"
  },
  
]


export default function KelasPage() {
  const router = useRouter();
  const imageUrls = mockDataImage.map((image) => image.url)



  const timeline = useMemo(() => gsap.timeline({paused: true}), {})

  useEffect(() => {
    timeline.fromTo('#bottomSheet', {y: "160%", opacity: 0, display: "none"}, {y: "70%", opacity: 1, duration: 0.5, display: "block", ease: "power3.out"})
  }, [timeline])

  const handleClick = () => {
    timeline.play();
  }

  const handleClose = () => {
    timeline.reverse();
  }

  return (
    <div className="relative bg-background_secondary overflow-y-auto pb-20 flex flex-col">
       {/* Tombol Search dan back */}
            <div className="p-4 "> 
              <div className='flex items-center justify-between'>
              <button className=" ">
                <Image src={BackButton} alt="backbutton" width={30} height={30} />
                back
              </button>
              <div className="pr-24 bg-background-secondary flex justify-center items-center">
              <h1 className="bg-[#FDD998] rounded-full text-center pt-1 w-[136px] h-[40px] text-xl font-bold">KELAS</h1>
              </div>
            </div>    
            </div>
      
      <Carousel images={imageUrls} /> 
     

      {/* Informasi Kelas */}
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">D3-1</h1>
        <p className="text-center text-gray-700 mt-2">
          Kelas D3-1 ini dilengkapi dengan fasilitas sebagai berikut:
        </p>

        {/* Fasilitas */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Image src={Kelas} alt="Orang" width={40} height={40} />
            <p className="text-black font-semibold text-sm">= 40 orang</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={TIPI} alt="Televisi" width={40} height={40} />
            <p className="text-black font-semibold text-sm">= 1 televisi</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={PapanTulis} alt="Papan Tulis" width={40} height={40} />
            <p className="text-black font-semibold text-sm">= 2 papan tulis</p>
          </div>
          
        </div>
      </div>

      {/* Gambar Koridor */}
      <div className="px-4 mt-6">
        <Image
          src="/images/d31.gif"
          alt="Koridor"
          className="w-full rounded-lg"
          width={600}
          height={300}
        />

        
      </div>

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

           {/* Tombol Panah Atas */}
  <button 

    onClick={handleClick}
    className="flex flex-col items-end text-black pr-10 pt-3"
  >
    <Image
      src={ArrowUp} // Ganti dengan source image panah Anda
      alt="scroll up"
      width={32}
      height={37}
      className="w-8 h-8 "
    />
  </button>
  {/* Gambar Denah Lokasi */}
  <div id='bottomSheet' className=" absolute items-center pl-6">
    <div className='bg-white rounded-lg flex flex-row items-center justify-center '>
    <h2 className="text-lg font-bold text-center text-black">Denah Lokasi</h2>
    <button 

    onClick={handleClose}
    className="flex flex-col items-end text-black"
  >
    <Image
      src={ArrowUp} // Ganti dengan source image panah Anda
      alt="scroll up"
      width={0}
      height={0}
      sizes='100%'
      className="items-end w-8 h-8 rotate-180"
    />
  </button>
    </div>
    <Image
      src={DenahD31}
      alt="Denah Lokasi"
      className="flex flex-row items-center rounded-lg mt-2"
      
    />
  </div>
    </div>


  );
}
