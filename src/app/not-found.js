"use client";
import Error from "@/components/Error";

const error = () => {
  return (
    <Error type={404} note="Page not found" description="Return to home" />
  );
};

export default error;
