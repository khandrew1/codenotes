"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { redirect } from "next/navigation"

const ProtectedPage = ({children, restriction, title}) => {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "loading") return;
        if (status !== "authenticated") {
            void signIn("google");
            return;
        }

        if (session.user.role !== restriction) {
            redirect('/403');
        }

    }, [status])

    return (
        <>
        {status === "loading" && <p>Loading...</p>}
        {status === "authenticated" && (
        <>
            <title>{title}</title>
            <div>{children}</div>
        </>
        )}
        </>
    )
}

export default ProtectedPage;