import { Layout } from "antd";
import { AppHeader } from "./components/Layout/AppHeader";
import { AppSider } from "./components/Layout/AppSider";
import { AppContent } from "./components/Layout/AppContent";
import "./index.scss";

export const App = () => {
  return (
    <Layout className="layoutStyle">
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
};
