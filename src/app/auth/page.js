'use client';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import Logo from '@/png/kepala';
import Image from 'next/image';
import Logo from '@/png/logoapk2.png';

import { useState } from 'react';
import { Signin } from '@/components/containers/sign-in/page';
import { SignUp } from '@/components/containers/sign-up/page';

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
      <div className="h-screen bg-background_secondary">
        <div className="bg-background_primary shadow-lg w-full max-w-sm">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src={Logo}
                alt="Paramadenah Logo"
                width={352}
                height={99}
              />
            </div>
            <p className="text-white font-bold mb-4">
              Selamat datang di Paramadenah
            </p>
            <p className="text-white">
              Silahkan lakukan Sign up atau Login untuk mengoperasikan
              Paramadenah
            </p>
          </div>
          <TabList>
            <div className="flex justify-center gap-2">
              <Tab
                className={`px-4 py-2 w-full text-center  ${
                  activeTab === 0 ? 'border-b-2 border-[#00304D]' : ''
                } focus:outline-none`}
              >
                Login
              </Tab>
              <Tab
                className={`px-4 py-2 w-full text-center ${
                  activeTab === 1 ? 'border-b-2 border-[#00304D]' : ''
                } focus:outline-none`}
              >
                SIGN UP
              </Tab>
            </div>
          </TabList>
        </div>
        <TabPanel>
          <Signin
            isPasswordVisible={isPasswordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        </TabPanel>
        <TabPanel>
          <SignUp />
        </TabPanel>
      </div>
    </Tabs>
  );
}
