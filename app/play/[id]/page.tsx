import { prisma } from "@/lib/prisma";
import PlayClient from "./PlayClient"

// eslint-disable-next-line @next/next/no-async-client-component
export default async function PlayPage({ params, }: { params: Promise<{ id: string }>; }) {
  const { id } = await params;
  const numericId = Number(id);

  if (!id || Number.isNaN(numericId)) {
    return <div>Invalid id</div>;
  }

  const create = await prisma.create.findUnique({                                           //ดึงข้อมูลจาก db create
    where: { id: numericId },
    include: {
      user: true
    }
  });

  if (!create) {
    return <div>Not found</div>
  }

  return (
    <div>
      <PlayClient create={create} />

    </div>
  );
}