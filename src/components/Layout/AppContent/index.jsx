import { Layout, Typography } from "antd";
import { useCrypto } from "../../../hooks/useCrypto";
import { PortfolioChart } from "../../PortfolioChart";
import { AssetsTable } from "../../AssetsTable";
import styles from "./content.module.scss";

export const AppContent = () => {
  const { assets, crypto } = useCrypto();

  const cryptoPriceMap = crypto.reduce((acc, coin) => {
    acc[coin.id] = coin.price;
    return acc;
  }, {});

  return (
    <Layout.Content className={styles.contentStyle}>
      <Typography.Title level={3} style={{ textAlign: "left", color: "#fff" }}>
        Portfolio{" "}
        {assets
          .map(asset => asset.amount * cryptoPriceMap[asset.id])
          .reduce((acc, v) => (acc += v), 0)
          .toFixed(2)}
        $
      </Typography.Title>
      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  );
};
