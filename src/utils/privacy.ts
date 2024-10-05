export const extractUserAgent = (userAgent: string) => {
  const regex = /(iPhone|iPad|iPod|Android|Windows|Macintosh|Linux|Ubuntu|Chrome|Firefox|Safari)/i;
  const match = userAgent.match(regex);
  return match ? match[0] : null;
};
