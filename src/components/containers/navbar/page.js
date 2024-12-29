import Rumah from '@/png/rumah.png';
import Notif from '@/png/notif.png';
import Gedung from '@/png/gedung.png';
import Profil from '@/png/profil.png';
import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg flex justify-between items-center px-2">
      <Link href="/Homescreen">
        <button className="flex flex-col items-center text-blue-900">
          <Image src={Rumah} alt="rumah" className="text-2xl" />
          <span className="text-xs">Menu Utama</span>
        </button>
      </Link>
      <Link href="/Notif">
        <button className="flex flex-col items-center text-black">
          <Image src={Notif} alt="notif" className="text-2xl" />
          <span className="text-xs">Notifikasi</span>
        </button>
      </Link>
      <Link href="/Fasilitas">
        <button className="flex flex-col items-center text-black">
          <Image src={Gedung} alt="gedung" className="text-2xl" />
          <span className="text-xs">Fasilitas</span>
        </button>
      </Link>
      <Link href="/Akun">
        <button className="flex flex-col items-center text-black">
          <Image src={Profil} alt="profil" className="text-2xl" />
          <span className="text-xs">Profil</span>
        </button>
      </Link>
    </div>
  );
}
