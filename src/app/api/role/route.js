import { NextResponse } from "next/server";
import { db } from "../../firebase.js";
import { doc, updateDoc } from "firebase/firestore";

export const POST = async (req) => {
  const res = NextResponse;
  const { id, role } = await req.json();
  const userRef = doc(db, "users", id);

  try {
    await updateDoc(userRef, {
      role: role,
    });
    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 },
    );
  }
};
