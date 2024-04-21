import widelogo from "../../public/widelogo.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="h-32 bg-codenotes-black-200 grid grid-cols-2 content-end py-2 text-codenotes-offwhite px-8">
      <div className="w-4/12 inline-flex items-center">
        <Image src={widelogo} alt={widelogo} className="w-8/12 mb-3" />
      </div>
      <div className="flex justify-end mb-3">
        <p className="flex items-center !m-0">
          &copy; 2024 Codenotes, LLC. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
