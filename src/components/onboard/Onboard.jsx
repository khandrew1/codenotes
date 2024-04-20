"use client";
import { useSession } from "next-auth/react";

const Onboard = () => {
  const { data: session } = useSession();

  const setUserRole = async (role) => {
    const response = await fetch("/api/role", {
      method: "POST",
      body: JSON.stringify({ id: session.user.id, role: role }),
    });

    const result = await response.json();

    console.log(result);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <p className="text-3xl">Are you a student or a instructor?</p>
      <div className="flex gap-3">
        <button
          className="border-4 border-codenotes-blue-200 rounded-md mt-5 hover:fade p-2 text-xl"
          onClick={setUserRole("student")}
        >
          Student
        </button>
        <button
          className="border-4 border-codenotes-blue-200 rounded-md mt-5 hover:fade p-2 text-xl"
          onClick={setUserRole("instructor")}
        >
          Instructor
        </button>
      </div>
    </div>
  );
};

export default Onboard;
