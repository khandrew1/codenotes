import Image from "next/image";
import logo from "../../../public/logo.svg";

const ClassSidebar = () => {
  return (
    <div className="w-2/12 flex flex-col pt-4 px-4 border-r-codenotes-darkgrey border-[1px] h-screen">
      <Image src={logo} alt="logo" />
      <p className="font-bold py-4 text-lg">Class Dashboard</p>
      <p>
        Access all your assignments. Click an assignment to turn in or resubmit
        an assignment.
      </p>
      <div className="mt-auto">
        <button className="flex items-center justify-center border-[2px] border-codenotes-darkgrey text-codenotes-darkgrey rounded-lg w-full mb-4 py-2 shadow-xl">
          logout
        </button>
      </div>
    </div>
  );
};

export default ClassSidebar;
