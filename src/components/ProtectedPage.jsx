"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "./Loading";

const ProtectedPage = ({ children, restriction, title }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (status !== "authenticated") {
      void signIn("google");
      return;
    }

    if (restriction === "onboard") {
      if (session.user.role === "instructor") {
        router.push(`/instructor`);
      } else if (session.user.role === "student") {
        router.push("/student");
      }
      return;
    }

    if (session.user.role !== restriction) {
      router.push("/403");
    }
  }, [status, restriction, session, router]);

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
