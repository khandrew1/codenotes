import { NextResponse } from "next/server";

export const POST = async (req) => {
  const res = NextResponse;

  const { code, language } = await req.json();

  try {
    const body = { source_code: code, language_id: language };

    const response = await fetch(
      `${process.env.BASE_URL}/submissions?base64_encoded=false&wait=true`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    const result = await response.json();

    console.log(result);

    return res.json({ message: "done!" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 },
    );
  }
};
