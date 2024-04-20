"use client";
import Error from "@/components/Error";

const error = () => {
  return (
    <Error
      type={500}
      note="Server Error"
      description="The server encountered an error and could not complete your request"
    />
  );
};

export default error;
