'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import apel from '@/png/apel.png';
import gugel from '@/png/Google.png';
import Logo from '@/png/logoapk2.png';
import Gembok from '@/png/gembok.png';
import Email from '@/png/email.png';
import Blind from '@/png/Blind.png';

export function Signin({isPasswordVisible, togglePasswordVisibility}) {
  // const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setIsPasswordVisible(!isPasswordVisible);
  // };
  return (
     <div className="mt-6 bg-background_secondary w-full p-6">
                <form className="">
                  <div className="border bg-white rounded-lg mb-4 flex items-center">
                    <div className="p-2">
                      <Image
                        src={Email}
                        alt="email"
                        width={30}
                        height={30}
                        priority={true}
                        quality={100}
                        className="justify-center align-middle"
                      />
                    </div>
                    <input
                      id="email"
                      type="email"
                      placeholder="Masukkan email Anda"
                      className="w-full left-14 py-2 bg-transparent text-black focus:outline-none"
                    />
                  </div>
    
                  {/*Password suy*/}
    
                  <div className="border bg-white rounded-lg mb-4 flex items-center">
                    <div className="p-2">
                      <Image
                        src={Gembok}
                        alt="gembok"
                        width={30}
                        height={30}
                        priority={true}
                        quality={100}
                        className="justify-center align-middle"
                      />
                    </div>
                    <input
                      type={isPasswordVisible ? 'text' : 'password'}
                      placeholder="Masukkan sandi Anda"
                      className="w-full py-2 bg-transparent text-black focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="mr-3 flex"
                    >
                      {isPasswordVisible ? (
                        <Image src={Blind} alt="ali" width={30} height={30} />
                      ) : (
                        <Image src={Blind} alt="ali" width={30} height={30} />
                      )}
                    </button>
                  </div>
    
                  <button
                    type="submit"
                    className="bg-blue-900 text-white text-center w-full py-2 rounded-lg hover:bg-blue-800"
                  >
                    Masuk
                  </button>
                </form>
    
                <p className="text-center text-black text-sm mt-4">Atau</p>
    
                <div className="flex flex-col gap-4 mt-4">
                  <button className="flex items-center justify-center w-full py-2 border rounded-lg text-black color bg-white">
                    <Image
                      src={apel}
                      alt="apel"
                      height={30}
                      width={30}
                      className="mr-2"
                    />{' '}
                    Masuk dengan Apple
                  </button>
                  <button className="flex items-center justify-center w-full py-2 border rounded-lg text-black bg-white">
                    <Image
                      src={gugel}
                      alt="gugel"
                      height={30}
                      width={30}
                      className="mr-2"
                    />{' '}
                    Masuk dengan Google
                  </button>
                </div>
    
                <p className="text-center text-black text-sm mt-4">
                  Belum punya akun?{' '}
                  <a href="\signup" className="text-blue-900 underline">
                    Buat Akun
                  </a>
                </p>
              </div>
  );
}
