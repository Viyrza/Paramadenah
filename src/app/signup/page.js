import Image from "next/image";
import Logo from "@/png/logoapk2.png"
import Kepala from "@/png/kepala.png"
import Email from "@/png/email.png"
import Gembok from"@/png/gembok.png"


export default function Home() {
  return (
    <div className="min-h-screen bg-background_secondary  flex flex-col justify-center items-center">
    <div className="bg-background_primary rounded-lg shadow-lg w-11/12 max-w-sm p-6">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Image src={Logo} alt="Paramadenah Logo"  width={352} height={99} />
        </div>
        <p className="text-white font-bold mb-4">Selamat datang di Paramadenah</p>
        <p className="text-white">Silahkan lakukan Sign up atau Login untuk mengoperasikan Paramadenah</p>
      </div>

      <div className="mt-6 flex justify-between border-b border-background_secondary">
        <button className="text-white py-2 w-1/2 border-b-2 border-transparent focus:outline-none focus:border-blue-900">
        <a href="\signin">LOGIN</a> 
        </button>
        <button className="text-white py-2 w-1/2 border-b-2 border-transparent focus:outline-none focus:border-blue-900" >
          SIGN UP
        </button>
      </div>

      <form className="mt-6 bg-black w-full ">
        <div className="border bg-white rounded-lg mb-4 flex items-center">
          <div className="p-2">
          <Image src={Kepala} alt="Kepala" width={30} height={30} priority={true} quality={100} className="justify-center align-middle"/>
          </div>
          <input
            id="name"
            type="text"
            placeholder="Nama Anda"
            className="w-full left-14 py-2 bg-transparent text-black focus:outline-none"
          />
        </div>

        <div className= "border bg-white rounded-lg mb-4 flex items-center">
        <div className="p-2">
          <Image src={Email} alt="Email" width={30} height={30} priority={true} quality={100} className="justify-center align-middle"/>
        </div>
          <input
            id="email"
            type="email"
            placeholder="Masukkan email Anda"
            className="w-full left-14 py-2 bg-transparent text-black focus:outline-none"
          />
        </div>

        <div className="border bg-white rounded-lg mb-4 flex items-center">
          <div className="p-2">
            <Image src={Gembok} alt="Gembok" width={30} height={30} priority={true} quality={100} className="justify-center align-middle"/>
          </div>
          <input
            id="password"
            type="password"
            placeholder="Masukkan sandi Anda"
            className="w-full left-14 py-2 bg-transparent text-black focus:outline-none"
          />
        </div>

        <div className="border bg-white rounded-lg mb-4 flex items-center">
          <div className="p-2">
            <Image src={Gembok} alt="Gembok" width={30} height={30} priority={true} quality={100} className="justify-center align-middle"/>
          </div>
          <input
            id="confirm-password"
            type="password"
            placeholder="Konfirmasikan sandi Anda"
            className="w-full left-14 py-2 bg-transparent text-black focus:outline-none"
          />
        </div>

        <p className="text-black text-sm text-center mt-2 mb-4">
          Dengan membuat akun ini, anda menyetujui{' '}
          <a href="#" className="text-black underline">
            Syarat & Ketentuan
          </a>{' '}
          yang berlaku
        </p>

        <button
          type="submit"
          className="bg-blue-900 text-white text-center w-full py-2 rounded-lg hover:bg-blue-800"
        >
          Sign up
        </button>
      </form>

      <p className="text-center text-black text-sm mt-4">
        Sudah punya akun?{' '}
        <a href="\signin" className="text-blue-900 underline">
          Masuk
        </a>
      </p>
    </div>
  </div>
  );
}
