'use client';
import Navbar from '@/components/containers/navbar/page';
import { usePathname } from 'next/navigation';

export default function clientLayout({ children }) {
  const pathName = usePathname();
  const NavbarPages = ['/Homescreen', '/mainmenu', '/Fasilitas', '/lokasi'];

  return (
    <section>
      {children}
      {NavbarPages.includes(pathName) && <Navbar/>}
    </section>
  );
}