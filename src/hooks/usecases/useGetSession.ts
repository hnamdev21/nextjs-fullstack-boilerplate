import { getServerSession } from "next-auth";

import { authOptions } from "@/auth";

export const useGetSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
