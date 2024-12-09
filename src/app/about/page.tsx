import React from 'react';

import Twosofa from '../components/Twosofa';
import { CiShoppingCart, CiHeart, CiSearch, CiUser } from "react-icons/ci";
import Link from "next/link";
import Button from '../components/Button';
import Sidetable from '../components/Sidetable';
import Insta from '../components/Insta';

const page = () => {
  return (
    <>
      <div className="bg-mywhite w-full">
        <nav className="flex items-center justify-between text-black px-4 py-4 w-full md:px-6 lg:px-8 md:py-6 lg:py-8 h-auto md:h-20 lg:h-24">
          {/* Logo Section */}
          <div className="text-xl md:text-2xl lg:text-3xl font-bold">
            <Link href="#"></Link>
          </div>

          {/* Links Section */}
          <ul className=" justify-center space-x-4 md:space-x-6 lg:space-x-8 text-base md:text-lg lg:text-2xl hidden md:flex">
            <li className="hover:text-gray-400">
              <Link href="/home">Home</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Icons Section */}
          <div className="flex gap-5 md:gap-4 lg:gap-6 text-2xl md:text-3xl lg:text-4xl mr-4">
            <Link href='/account'>
              <button className="hover:text-gray-400">
                <CiUser title="User" />
              </button>
            </Link>
            <Link href='/account'>
              <button className="hover:text-gray-400">
                <CiSearch title="Search" />
              </button>
            </Link>
            <Link href='/asgrad'>
              <button className="hover:text-gray-400">
                <CiHeart title="Wishes" />
              </button>
            </Link>
            <Link href='/cart'>
              <button className="hover:text-gray-400">
                <CiShoppingCart title="Cart" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Icon (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button className="text-2xl md:hidden">
              {/* Insert hamburger icon here */}
            </button>
          </div>
        </nav>
      </div>

      {/* Content */}
      
      <Twosofa />
      <Button />
      <Sidetable />
      <Insta/>
    </>
  );
};

export default page;
