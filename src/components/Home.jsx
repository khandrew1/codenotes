"use client";

import Image from "next/image";
import doc from "../../public/document.png";
import code from "../../public/code.png";
import { FaSortDown } from "react-icons/fa";
import { signIn } from "next-auth/react";

const Content = () => {
  return (
    <div className="w-full h-5/6 flex items-center justify-center text-black">
      <div className="w-[30%] h-full flex flex-col items-center justify-center">
        <Image src={doc} alt="document" className="w-1/2" />
        <FaSortDown className="text-7xl text-[#000] m-0 p-0 align-top" />
        <Image src={code} alt="code" className="w-1/2" />
      </div>
      <div className="w-[60%] flex flex-col h-full justify-center">
        <p className="w-4/5 mb-5 text-4xl font-black">
          Upload and Compile your Code Anywhere
        </p>
        <p className="w-4/5 text-lg">
          CodeNotes helps you seamlessly grade all written coding assignments,
          whether online or in-class. Save time grading and get a clear picture
          of how your students are doing.
        </p>
        <div className="flex">
          <button
            onClick={() => signIn("google")}
            className="border-4 border-codenotes-blue-200 rounded-md mt-5 hover:fade p-2 text-xl"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
