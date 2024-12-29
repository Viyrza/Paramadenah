'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Rumah from '@/png/rumah.png';
import Notif from '@/png/notif.png';
import Gedung from '@/png/gedung.png';
import Profil from '@/png/profil.png';
import Akun from '@/png/akunn.svg';
import Profill from '@/png/profill.svg';
import BackButton from '@/png/backbutton.svg';
import Edit from '@/png/edit.svg';
import Link from 'next/link';

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col">
      {/* Background Section */}
      <div className="relative">
        {/* Background Image */}
        <Image
          src={Akun}
          alt="Background"
          width={200}
          height={200}
          className="w-full h-screen object-cover"
        />

        {/* Back Button */}
        <button
          className="absolute top-4 left-4 gap-2"
          onClick={() => router.back('/Homescreen')}
        >
          {' '}
          <Image src={BackButton} alt="backbutton" width={35} height={35} />
          back
        </button>

        {/* Profile Content Overlay */}
        <div className="absolute top-12 translate-x-24 flex flex-col items-center justify-center mt-18">
          <div className="relative items-center">
            <Image
              src={Profill}
              alt="Profile Avatar"
              width={225}
              height={128}
              className="rounded-full"
            />
            <div className="absolute top-52 right-6 bg-white p-1 rounded-full shadow-md">
              <div>
                <Image src={Edit} alt="edit" width={20} height={20} />
              </div>
            </div>
          </div>
          <h1 className="mt-4 text-xl font-bold text-black">JAGUAR NEON</h1>
          <p className="text-black">1234567890</p>
          <p className="text- text-sm">Desain Komunikasi Visual</p>
          <p className="text-sm">jaguarneon@students.paramadina.ac.id</p>
        </div>
      </div>

      {/* Additional Profile Info */}
      <div className="absolute bottom-24 flex flex-col items-center mt-20 px-16">
        {/* Email Section */}
        <div className="flex items-center gap-2">
          <p className="text-gray-600 text-sm"></p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center gap-10  w-full">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md  shadow-md">
            Ubah Password
          </button>
          <Link href="/auth">
            <button className="bg-red-500 text-white px-6 py-2 rounded-md px-7 shadow-md">
              Keluar
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg flex justify-between items-center px-4 py-2">
        <button className="flex flex-col items-center text-blue-900">
          <Image src={Rumah} alt="rumah" className="w-6 h-6" />
          <span className="text-xs">Menu Utama</span>
        </button>
        <button className="flex flex-col items-center text-black">
          <Image src={Notif} alt="notif" className="w-6 h-6" />
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
