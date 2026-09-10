import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  const db = await getDb();
  const docs = await db
    .collection<{ linkId: string; count: number }>("clicks")
    .find({})
    .toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc.linkId] = doc.count;
  }

  return NextResponse.json(counts);
}
