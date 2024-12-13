'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Logo from '@/png/logoapk2.png';
import { useRouter } from 'next/navigation';




export default function SplashScreen(){
    const route = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
          route.push('/signup');
        }, 1500);
        return () => clearTimeout(timer);
      }, [route]);
  return (
    <div className="min-h-screen bg-background_primary  flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <Image src={Logo} alt="Paramadenah Logo" priority={true} quality={100} sizes={100} className="animate-bounce mb-4" />
      </div>
    </div>
  );
}       