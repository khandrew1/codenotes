export const POST = async (req) => {
  const { image } = await req.json();

  const response = await fetch(process.env.OCR_URL, {
    method: "POST",
    body: image,
  });

  const data = await response.json();

  return Response.json(data);
};
