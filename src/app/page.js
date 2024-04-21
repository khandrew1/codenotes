import Navbar from "@/components/Navigation";
import Home from "../components/Home";

const Page = () => {
  return (
    <div className="w-full h-full bg-gradient-to-t from-gray-300 to-[#F5F5F5]">
      <Navbar />
      <Home />
    </div>
  );
};
export default Page;
