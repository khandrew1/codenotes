import darkmodelogo from "../../public/darkmodelogo.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-codenotes-black-100 grid grid-cols-2 py-2 text-codenotes-offwhite">
      <div className="w-4/12">
        <Image src={darkmodelogo} alt={darkmodelogo} className="w-2/12" />
      </div>

      <p className="flex items-center !m-0">
        &copy; 2024 Codenotes, LLC. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
