import Navigation from "@/components/Navigations";
import Home from "../components/Home";
import Footer from "@/components/Footer";
import Body from "@/components/Body";
const Page = () => {
  return (
    <div className="w-full h-full">
      <Navigation />
      <Home />
      <Body />
      <Footer />
    </div>
  );
};
export default Page;
