import Navbar from "../../navbar";
import { prisma } from "@/lib/prisma";
import PlayClient from "./PlayClient"

// eslint-disable-next-line @next/next/no-async-client-component
export default async function PlayPage({ params, }: { params: Promise<{ id?: string }>; }) {
  const { id } = await params;
  const numericId = Number(id);

  if (!id || Number.isNaN(id)) {
    return <div>Invalid id</div>;
  }

  const create = await prisma.create.findUnique({
    where: { id: numericId},
  });

  if (!create) {
    return <div>Not found</div>
  }

  return (
    <div>
      <Navbar />
      <PlayClient create={create} />

    </div>
  );
}