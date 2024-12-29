'use client';
import Image from 'next/image';
import Notif2 from '@/png/notif2.svg';
import Gedung from '@/png/gedung.png';
import Profil from '@/png/profil.png';
import BackButton from '@/png/backbutton.svg';
import Kaca from '@/png/Untitled.png';
import Toilet from '@/png/toilet.png'
import Rumah2 from '@/png/rumah2.svg';
import KelazMerah from '@/png/kelazmerah.svg';
import PerpusMerah from '@/png/perpusmerah.svg';

export default function NotificationPage() {
  

  return (
    <div className="bg-background_secondary min-h-screen flex flex-col">
      {/* Header */}
      <div className="relative bg-background_secondary py-4 px-6 ">

        {/* Tombol Search dan back */}
              <div className="flex justify-between py-4 gap- ">
                <button className=" ">
                  <Image src={BackButton} alt="backbutton" width={30} height={30}
                   />
                </button>
        
                <button className="">
                  <Image src={Kaca} alt="search icon" width={30} height={30} />
                </button>
              </div>

        {/* Page Title */}
        <div className="pl-5">
          <h1 className="text-blue-700 font-bold text-2xl">NOTIFIKASI</h1>
          <p className="text-black font-semibold text-sm">Halaman informasi seputar kampus</p>
        </div>
      </div>

      {/* Notification List */}
      <div className="mt-2 px-7 space-y-3">
               <div className="flex items-center bg-white p-4 rounded-[8px] border-2 border-red-600 ">
                 <Image
                 src={Toilet}
                 alt="toilet"
                 height={30}
                 width={30}
                 className='flex shrink-0'
                 />
                 <p className="ml-4 text-black font-semibold text-[11px] ">
                   Toilet Gedung C dan D sedang dalam perbaikan untuk sementara gunakan toilet Gedung A. 
                 </p>
               </div>

               <div className="flex items-center bg-white p-4 rounded-[8px] border-2 border-red-600 ">
                 <Image
                 src={KelazMerah}
                 alt="KelazMerah"
                 height={30}
                 width={30}
                 className='flex shrink-0'
                 />
                 <p className="ml-4 text-black font-semibold text-[11px] ">
                 Kelas H.JUSUF KALLA D2-6 sedang mengalami kerusakan , untuk sementara kelas dipindahkan ke H. JUSUF KALLA D1-5.
                 </p>
               </div>

               <div className="flex items-center bg-white p-4 rounded-[8px] border-2 border-red-600 ">
                 <Image
                 src={PerpusMerah}
                 alt="perpusmerah"
                 height={30}
                 width={30}
                 className='flex shrink-0'
                 />
                 <p className="ml-4 text-black font-semibold text-[11px] ">
                 Kami mengingatkan bahwa batas waktu pengembalian buku Tanggal: 20 September 2025 Pastikan untuk mengembalikan buku pinjam tepat waktu
                 </p>
               </div>
             </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg flex justify-between items-center px-2 py-1">
        <button className="flex flex-col items-center text-black">
          <Image src={Rumah2} alt="rumah" className="w-6 h-6" />
          <span className="text-xs">Menu Utama</span>
        </button>
        <button className="flex flex-col items-center text-blue-900">
          <Image src={Notif2} alt="notif" className="w-6 h-6" />
          <span className="text-xs">Notifikasi</span>
        </button>
        <button className="flex flex-col items-center text-black">
          <Image src={Gedung} alt="gedung" className="w-6 h-6" />
          <span className="text-xs">Fasilitas</span>
        </button>
        <button className="flex flex-col items-center text-black">
          <Image src={Profil} alt="profil" className="w-6 h-6" />
          <span className="text-xs">Profil</span>
        </button>
      </div>
    </div>
  );
}
