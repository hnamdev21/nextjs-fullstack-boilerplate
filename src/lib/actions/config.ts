import { FeatureFlag } from "@prisma/client";

import { db } from "@/lib/db";

export const getFeatureFlag = async (feature: string): Promise<FeatureFlag | null> => {
  const featureFlag = await db.featureFlag.findUnique({
    where: {
      name: feature,
    },
  });

  return featureFlag;
};
