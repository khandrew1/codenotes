"use client";
import { SessionProvider } from "next-auth/react";

const Session = ({ children, session }) => {
  return (
    <SessionProvider session={session} refetchInterval={5 * 10}>
      {children}
    </SessionProvider>
  );
};

export default Session;
