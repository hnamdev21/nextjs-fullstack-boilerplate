import { theme } from "antd";

const useAntdStyle = () => {
  const { token } = theme.useToken();

  return token;
};

export default useAntdStyle;
