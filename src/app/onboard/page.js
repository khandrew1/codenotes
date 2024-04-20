"use client";
import Onboard from "@/components/onboard/Onboard";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Welcome!" restriction="onboard">
      <Onboard />
    </ProtectedPage>
  );
};

export default Page;
