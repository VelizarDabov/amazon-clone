import Image from "next/image";
import React from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import {  signIn} from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectItems } from "@/slices/basketSlice";
const Header = () => {
  const router = useRouter();
  const items= useSelector(selectItems);
  return (
    <header>
      {/* left */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 mx-4">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
      
            className="cursor-pointer"
            alt=""
          />
        </div>

        {/* center */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            placeholder="Search"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
          />
          <SearchIcon className="h-10 p-4" />
        </div>
        {/* right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          {/* first */}
          <div className="link" onClick={signIn}>
            <p> Hello Velizar Dabov</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          {/* second */}
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          {/* third */}
          <div className="relative link flex items-center ">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
          {items.length}
            </span>
            <ShoppingCartIcon className="h-10" onClick={() => router.push('/checkout')} />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className=" link hidden md:inline-flex">Electronics</p>
        <p className=" link hidden md:inline-flex">Food & Grocery</p>
        <p className=" link hidden md:inline-flex">Prime</p>
        <p className=" link hidden md:inline-flex">Buy Again</p>
        <p className=" link hidden md:inline-flex">Shopper Toolkit</p>
        <p className=" link hidden md:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
