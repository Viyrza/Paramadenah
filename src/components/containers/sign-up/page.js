import Image from 'next/image';
import Logo from '@/png/logoapk2.png';
import Kepala from '@/png/kepala.png';
import Email from '@/png/email.png';
import Gembok from '@/png/gembok.png';

export function SignUp() {
  return (
      <form className="mt-6 bg-background_secondary w-full p-6">
        <div className="bord  er bg-white rounded-lg mb-4 flex items-center">
          <div className="p-2">
            <Image
              src={Kepala}
              alt="Kepala"
              width={30}
            height={30}
            priority={true}
            quality={100}
            className="justify-center align-middle"
          />
        </div>
        <input
          id="name"
          type="text"
          placeholder="Nama Anda"
          className="w-full left-14 py-2 bg-transparent text-black focus:outline-none"
        />
      </div>

      <div className="border bg-white rounded-lg mb-4 flex items-center">
        <div className="p-2">
          <Image
            src={Email}
            alt="Email"
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

      <div className="border bg-white rounded-lg mb-4 flex items-center">
        <div className="p-2">
          <Image
            src={Gembok}
            alt="Gembok"
            width={30}
            height={30}
            priority={true}
            quality={100}
            className="justify-center align-middle"
          />
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
          <Image
            src={Gembok}
            alt="Gembok"
            width={30}
            height={30}
            priority={true}
            quality={100}
            className="justify-center align-middle"
          />
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
  );
}
