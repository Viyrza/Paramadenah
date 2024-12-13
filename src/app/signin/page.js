'use client'
import React, { useState } from "react"
import Image from 'next/image';
import apel from '@/png/apel.png';
import gugel from '@/png/Google.png';
import Logo from "@/png/logoapk2.png";
import Gembok from "@/png/gembok.png";
import Email from "@/png/email.png";
import Blind from "@/png/Blind.png"

export default function Signin() {
 const [isPasswordVisible, setIsPasswordVisible] = useState(false);

 const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
 }
    return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="bg-background_primary rounded-lg shadow-lg w-11/12 max-w-sm p-6">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Image src={Logo} alt="logo" width={352} height={99} />
          </div>
          <p className="text-white font-bold mb-4">Selamat datang di Paramadenah</p>
          <p className="text-white">Silahkan lakukan Sign up atau Login untuk mengoperasikan Paramadenah</p>
        </div>

        <div className="mt-6 flex justify-between border-b border-gray-300">
          <button className="text-white py-2 w-1/2 border-b-2 border-transparent focus:outline-none focus:border-blue-900">
            LOGIN
          </button>
          <button className="text-white py-2 w-1/2 border-b-2 border-transparent focus:outline-none focus:border-blue-900">
            <a href="\signup">SIGN UP</a> 
          </button>
        </div>

            {/*Email suy*/}

        <form className="mt-6">
          <div className="border bg-white rounded-lg mb-4 flex items-center">
            <div className='p-2'>
                <Image src={Email} alt="email" width={30} height={30} priority = {true} quality={100} className="justify-center align-middle"/>
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
            <div className='p-2'>
                <Image src={Gembok} alt="gembok" width={30} height={30} priority = {true} quality={100} className="justify-center align-middle" />
            </div>
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Masukkan sandi Anda"
              className="w-full py-2 bg-transparent text-black focus:outline-none"  
            />
            <button type="button" onClick={togglePasswordVisibility} className="mr-3 flex">
                {isPasswordVisible ? <Image src={Blind} alt='ali' width={30} height={30}/> : <Image src={Blind} alt='ali' width={30} height={30}/>  }
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
            <Image src={apel} alt="apel" height={30} width={30}  className="mr-2" /> Masuk dengan Apple
          </button>
          <button className="flex items-center justify-center w-full py-2 border rounded-lg text-black bg-white">
            <Image src={gugel} alt="gugel" height={30} width={30} className="mr-2" /> Masuk dengan Google
          </button>
        </div>

        <p className="text-center text-black text-sm mt-4">
          Belum punya akun?{' '}
          <a href="\signup" className="text-blue-900 underline">
            Buat Akun
          </a>
        </p>
      </div>
    </div>
  );
}
