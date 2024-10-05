import { NextRequest, NextResponse } from "next/server";
import { Session } from "next-auth";

import { StatusCodeString } from "@/constants/status-code";
import NextResponseBuilder from "@/dto/NextResponseBuilder";
import { useGetSession } from "@/hooks/usecases/useGetSession";

export async function GET(req: NextRequest): Promise<NextResponse<ApiResponse<Session | null>>> {
  const session = await useGetSession();

  if (!session?.user) {
    return NextResponseBuilder.build(null, StatusCodeString.UNAUTHORIZED);
  }

  return NextResponseBuilder.build(session, StatusCodeString.SUCCESS);
}
