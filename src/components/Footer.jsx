import widelogo from "../../public/widelogo.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-codenotes-lightgrey grid grid-cols-2 py-2">
      <Image src={widelogo} alt={widelogo} className="w-2/12" />
      <p className="flex items-center !m-0">
        &copy; 2024 Codenotes, LLC. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
