import React from "react";

import { getIp } from "@/services/third-party/privacy";
import { extractUserAgent } from "@/utils/privacy";

type DeviceInfo = {
  ip: string;
  device: string | null;
};

const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = React.useState<DeviceInfo | null>(null);

  const getDeviceInfo = async () => {
    const ip = await getIp();
    const { userAgent } = navigator;

    const info: DeviceInfo = {
      ip,
      device: extractUserAgent(userAgent),
    };

    setDeviceInfo(info);
  };

  React.useEffect(() => {
    getDeviceInfo();
  }, []);

  return deviceInfo;
};

export default useDeviceInfo;
