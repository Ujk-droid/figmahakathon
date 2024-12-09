import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div>
      <section className="bg-myyellow">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-10 py-16 mx-auto flex flex-wrap items-center">
          {/* Left Section */}
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-center md:text-left">
            <h1 className="title-font font-medium text-4xl sm:text-5xl md:text-6xl text-gray-900 ml-2 sm:ml-5 md:ml-10 lg:ml-20">
              Roket Single
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl pt-4 mt-3 ml-2 sm:ml-5 md:ml-10 lg:ml-20">
              Seater
            </h2>
            <Link href="/shop">
              <div className="text-xl sm:text-2xl pt-6 mt-6 ml-2 sm:ml-5 md:ml-10 lg:ml-20">
                Shop Now
              </div>
              <div className="h-1 w-[20px] sm:w-[100px] md:w-[150px] lg:w-[250px] bg-black mt-2 ml-4 sm:ml-10 md:ml-10 lg:ml-20"></div>
            </Link>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/5 md:w-1/2 w-full mt-6 md:mt-0">
            <div className="mx-auto sm:mr-12 overflow-hidden h-64 sm:h-72 md:h-[450px] lg:h-[600px] bg-myyellow rounded-lg">
              <Image
                src="/Rocket single seater 1.png"
                alt="chair"
                width={800}
                height={600}
                className="hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
