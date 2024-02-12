import React from "react";
import { CryptoContext } from "../../../context/cryptoContext";
import { Layout, Spin } from "antd";
import { AppHeader } from "../AppHeader";
import { AppSider } from "../AppSider";
import { AppContent } from "../AppContent";
import styles from "./layout.module.scss";

export const AppLayout = () => {
  const { loading } = React.useContext(CryptoContext);

  if (loading) {
    return <Spin fullscreen />;
  }

  return (
    <Layout className={styles.layoutStyle}>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
};
