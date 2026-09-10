import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function POST(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const db = await getDb();
  const result = await db
    .collection<{ linkId: string; count: number }>("clicks")
    .findOneAndUpdate(
      { linkId: params.id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" }
    );

  return NextResponse.json({ count: result?.count ?? 1 });
}
