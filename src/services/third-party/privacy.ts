export const getIp = async () => {
  const response = await fetch("https://api.ipify.org?format=json");
  const data = await response.json();

  return data.ip as string;
};
