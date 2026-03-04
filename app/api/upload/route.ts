import cloudinary from "@/lib/cloundinary";
export const runtime = "nodejs";
export const maxDuration = 60;

async function uploadBuffer(buffer: Buffer) {
  return new Promise<any>((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => (error ? reject(error) : resolve(result))
    ).end(buffer);
  });
}

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const file = data.get("file") as File;
    const buffer = Buffer.from(await file.arrayBuffer());

    const result = await uploadBuffer(buffer);
    console.log("UPLOAD SUCCESS:", result.secure_url);

    return Response.json(result);
  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    return new Response("Upload failed", { status: 500 });
  }
}