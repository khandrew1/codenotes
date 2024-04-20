"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo.png";

const Navbar = () => {
  return (
    <div className="w-4/5 h-1/6 mx-auto flex items-center justify-center justify-between border-b-2 border-codenotes-black-100">
      <Link href="/">
        <Image src={Logo} alt="CodeNotes logo" className="w-20 m-5" />
      </Link>
      <div className="flex items-center m-5">
        <button
          onClick={() =>
            signIn("google", { callbackUrl: "/onboard", redirect: true })
          }
          className="p-2 text-xl border-4 border-codenotes-blue-200 rounded-md hover:fade"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
