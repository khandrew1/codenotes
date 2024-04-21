"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Loading from "../Loading";
import { useRouter } from "next/navigation";

const Onboard = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  if (session.user.role === "instructor") {
    router.push("/instructor");
  }

  if (session.user.role === "student") {
    router.push("/student");
  }

  const giveRole = async (role) => {
    setIsLoading(true);
    const response = await fetch("/api/role", {
      method: "POST",
      body: JSON.stringify({ id: session.user.id, role: role }),
    });

    const result = await response.json();

    console.log(result);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-3xl">Are you a student or a instructor?</p>
          <div className="flex gap-3">
            <button
              className="border-4 border-codenotes-blue-200 rounded-md mt-5 hover:fade p-2 text-xl"
              onClick={() => giveRole("student")}
            >
              Student
            </button>
            <button
              className="border-4 border-codenotes-blue-200 rounded-md mt-5 hover:fade p-2 text-xl"
              onClick={() => giveRole("instructor")}
            >
              Instructor
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Onboard;
