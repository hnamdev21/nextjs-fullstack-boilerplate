import { NextResponse } from "next/server";

import { StatusCodeNumber, StatusCodeStringKey } from "@/constants/status-code";

class NextResponseBuilder {
  static build<T>(data: T, statusCode: StatusCodeStringKey): NextResponse<ApiResponse<T>> {
    return NextResponse.json<ApiResponse<T>>({ data, error: "" }, { status: StatusCodeNumber[statusCode] });
  }
}

export default NextResponseBuilder;
