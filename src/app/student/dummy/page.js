import Navigation from "@/components/Navigations";
import Footer from "@/components/Footer";
import { HeroHighlight, Highlight } from "@/components/ui/Hero-highlight";
const Page = () => {
  return (
    <div className="!bg-black">
      <Navigation />
      <HeroHighlight className="flex flex-col gap-4 items-center justify-center h-screen !pb-28">
        <p className="text-4xl text-black font-semibold">CHANGING THE WORLD</p>

        <Highlight className="flex items-center px-3 py-2 text-white">
          ONE CHROMOSOME AT A TIME
        </Highlight>
      </HeroHighlight>
      <Footer />
    </div>
  );
};
export default Page;
