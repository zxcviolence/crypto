import { Layout } from "antd";
import { AppHeader } from "./components/Layout/AppHeader";
import { AppSider } from "./components/Layout/AppSider";
import { AppContent } from "./components/Layout/AppContent";
import { AppLayout } from "./components/Layout/AppLayout";

export const App = () => {
  return (
    <>
      <AppLayout>
        <AppHeader />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      </AppLayout>
    </>
  );
};
