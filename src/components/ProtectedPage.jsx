"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Loading from "./Loading";

const ProtectedPage = ({ children, restriction, title }) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;
    if (status !== "authenticated") {
      void signIn("google");
      return;
    }

    if (restriction === "onboard") {
      if (session.user.role === "instructor") {
        redirect(`/instructor`);
      } else if (session.user.role === "student") {
        redirect("/student");
      }
      return;
    }

    if (session.user.role !== restriction) {
      redirect("/403");
    }
  }, [status, restriction, session]);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "authenticated" && (
        <>
          <title>{title}</title>
          <div className="w-full h-screen">
            <div className="h-full">{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default ProtectedPage;
