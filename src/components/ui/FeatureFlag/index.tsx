import React from "react";

import { getFeatureFlag } from "@/lib/actions/config";

type Props = {
  feature: string;
  children: React.ReactNode;
};

const FeatureFlag = async ({ feature, children }: Props) => {
  const isFeatureEnabled = !!(await getFeatureFlag(feature))?.enabled;

  if (!isFeatureEnabled) {
    return null;
  }

  return children;
};

export default FeatureFlag;
