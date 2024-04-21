import widelogo from "../../public/widelogo.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-codenotes-black-100 grid grid-cols-2 py-2 text-codenotes-offwhite px-8">
      <div className="w-4/12 inline-flex items-center">
        <Image src={widelogo} alt={widelogo} className="w-8/12" />
      </div>
      <div className="flex justify-end">
        <p className="flex items-center !m-0">
          &copy; 2024 Codenotes, LLC. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
