import Image from "next/image";
import logo from "../../../../public/logo.svg";
import Link from "next/link";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="w-2/12 flex justify-center items-center bg-gray-100 border-r-[1px] h-screen">
      <div className="w-[80%] h-[92.5%] flex flex-col justify-between">
        <div>
          <Link href="/" className="pb-4">
            <Image src={logo} alt="logo" />
          </Link>
          <p className="pt-5 font-semibold">Your Courses</p>
          <p className="text-sm pt-2">
            Welcome to Codenotes! Click on one of courses on the right, or on
            the Account menu below.
          </p>
        </div>
        <Link
          href="/"
          className="w-full mb-4 py-2 flex items-center justify-center rounded-lg shadow-xl transition ease-in-out bg-gray-300 hover:bg-gray-400 hover:scale-110 duration-300 "
        >
          <IoMdLogOut className="mx-2 text-xl" />
          logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
