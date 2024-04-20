"use client";

import { signIn } from "next-auth/react";

const Page = () => {
  return <button onClick={() => signIn("google")}>Sign In</button>;
};

export default Page;
