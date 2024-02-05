import { Layout } from "antd";

const layoutStyle = {
  overflow: "hidden",
  width: "calc(100%)",
  maxWidth: "calc(100%)",
};

export const AppLayout = ({ children }) => {
  return <Layout style={layoutStyle}>{children}</Layout>;
};
