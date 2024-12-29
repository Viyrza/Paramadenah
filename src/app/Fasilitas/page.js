'use client';
import Image from 'next/image';
import Kaca from '@/png/Untitled.png';
import Tooilet from '@/png/Toilet.svg';
import Perpustakaan from '@/png/Perpustakaan.svg';
import BackButton from '@/png/backbutton.svg';
import Kantin from '@/png/Kantin.svg';
import CommunalSpace from '@/png/Communal.svg';
import Lift from '@/png/Lift.svg';
import Tangga from '@/png/Tangga.svg';
import EmergencyRoom from '@/png/EmergencyExit.svg';
import Parkir from '@/png/Parkir.svg';
import Security from '@/png/PosSecurity.svg';
import LabGame from '@/png/LabGame.svg';
import LabDesign from '@/png/LabDesign.svg';
import LabKomputer from '@/png/LabKom.svg';
import LabPhoto from '@/png/LabPhoto.svg';
import Rektorat from '@/png/Rektorat.svg';
import Prodi from '@/png/Prodi.svg';
import Rapat from '@/png/RuangRapat.svg';
import Humas from '@/png/Humas.svg';
import TataUsaha from '@/png/TU.svg';
import Tendik from '@/png/Tendik.svg';
import Gudang from '@/png/Gudang.svg';
import Janitor from '@/png/Janitor.svg';
import Link from 'next/link';
import Mushola from '@/png/Masjid.svg';



export default function FasilitasPage() {
  return (
    <div className="bg-background_secondary h-screen overflow-y-auto pb-20">
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

      {/* Title */}
      <div className="text-center mt-6">
        <h2 className="text-start pl-4   text-2xl font-bold text-blue-900">
          FASILITAS
        </h2>
        <p className="text-black font-semibold">
          Halaman informasi fasilitas tersedia di kampus
        </p>
      </div>

      {/* Fasilitas Sections */}
      <div className="mt-6 px-6 space-y-6">
        {/* Fasilitas Umum */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">FASILITAS UMUM</h3>
          <div className="grid grid-cols-3 gap-x-4 gap-y-7  mt-4">
            <div className="grid justify-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={Tooilet}
                alt="toili"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">toilet</p>
            </div>
            <div className="grid justify-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={Perpustakaan}
                alt="Perpusli"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Library</p>
            </div>
            <div className="grid justify-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Link href="/Fasilitas/Kantin">
              <Image
                src={Kantin}
                alt="Kaili"
                width={48}
                height={48}
                className="items-center pt-2"
                />
                </Link>
              <p className="text-center text-white pb-2">Kantin</p>
            </div>
            <div className="grid justify-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Link href="/Fasilitas/Mushola">
              <Image
                src={Mushola}
                alt="Kaili"
                width={48}
                height={48}
                className="items-center pt-2"
                />
                </Link>
              <p className="text-center text-white pb-2">Mushola</p>
            </div>
            <div className="grid justify-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              
              <Image
                src={CommunalSpace}
                alt="Communali"
                width={48}
                height={48}
                className="flex-shrink-0 items-center pt-2"
              />
              <p className="text-center text-white pb-2">Taman</p>
            </div>
            <div className="grid justify-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={Lift}
                alt="Liftili"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Lift</p>
            </div>
            <div className="grid justify-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={Tangga}
                alt="Tangli"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Tangga</p>
            </div>
            <div className="grid justify-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={EmergencyRoom}
                alt="EmergencyLili"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Emergency</p>
            </div>
            <div className="grid justify-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={Parkir}
                alt="Parli"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Parkir</p>
            </div>
            <div className="grid justify-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
             <Link href="/Fasilitas/Security">
              <Image
                src={Security}
                alt="Secuili"
                width={48}
                height={48}
                className="items-center pt-2"
                />
                </Link>
              <p className="text-center text-white pb-2">Security</p>
            </div>
          </div>
        </div>

        {/* Lab Kelas */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">LAB KELAS</h3>
          <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col items-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={LabKomputer}
                alt="LabKili"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Komputer</p>

              
            </div>
          <div className="flex flex-col items-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={LabGame}
                alt="LabGameIli"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Lab.Game</p>

              
            </div>
          <div className="flex flex-col items-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={LabDesign}
                alt="LabDili"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Design</p>

              
            </div>
          <div className="flex flex-col items-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={LabPhoto}
                alt="LabPholi"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Photo</p>

              
            </div>
          </div>
        </div>

        {/* Ruang Kantor */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">RUANG KANTOR</h3>
          <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col items-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={Rektorat}
                alt="Rektoli"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Rektorat</p>
            </div>
            <div className="flex flex-col items-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={Prodi}
                alt="Proli"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Prodi</p>
            </div>
            <div className="flex flex-col items-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={Rapat}
                alt="Rapatli"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">R.Rapat</p>
            </div>
            <div className="flex flex-col items-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={Tendik}
                alt="Tenli"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Tendik</p>
            </div>
            <div className="flex flex-col items-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Link href="/Fasilitas/Humas">
              <Image
                src={Humas}
                alt="Humali"
                width={48}
                height={48}
                className="items-center pt-2"
                />
                </Link>
              <p className="text-center text-white pb-2">Humas</p>
            </div>
            <div className="flex flex-col items-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={TataUsaha}
                alt="TataLili"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Ruang T.U</p>
            </div>
          </div>
        </div>

        {/* Fasilitas Lainnya */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">FASILITAS LAINNYA</h3>
          <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col items-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={Gudang}
                alt="GulaLi"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Gudang</p>
            </div>
            <div className="flex flex-col items-center bg-background_primary rounded-lg w-[82px] h-[82px] ">
              <Image
                src={Janitor}
                alt="Janili"
                width={48}
                height={48}
                className="items-center pt-2"
              />
              <p className="text-center text-white pb-2">Janitor</p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

function FasilitasItem({ name }) {
  return (
    <div className="bg-blue-500 text-white text-center p-2 rounded-lg shadow">
      {name}
    </div>
  );
}

function NavButton({ name, icon, isActive }) {
  return (
    <button
      className={`flex flex-col items-center ${
        isActive ? 'text-blue-500' : 'text-gray-500'
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-sm">{name}</span>
    </button>
  );
}
