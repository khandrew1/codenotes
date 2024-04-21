"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "./Loading";

const ProtectedPage = ({ children, restriction, title }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    if (status !== "authenticated") {
      void signIn("google");
      return;
    }

    if (restriction !== "onboard" && session.user.role !== restriction) {
      router.push("/404");
    } else {
      setConfirmed(true);
    }

  }, [status, session, router, restriction]);

  return (
    <>
      {confirmed ? (
        <>
          <title>{title}</title>
          <div className="w-full h-screen">
            <div className="h-full">{children}</div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProtectedPage;
