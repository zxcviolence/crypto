import React from "react";
import { CryptoContext } from "../../../context/cryptoContext.jsx";
import { Card, Layout, List, Statistic, Typography, Tag } from "antd";
import { capitalize } from "../../../utils.js";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import styles from "./sider.module.scss";

export const AppSider = () => {
  const { assets } = React.useContext(CryptoContext);

  return (
    <Layout.Sider width="25%" className={styles.siderStyle}>
      {assets.map(asset => (
        <Card key={asset.id} style={{ marginBottom: "1rem" }}>
          <Statistic
            title={capitalize(asset.id)}
            value={asset.totalAmount}
            precision={2}
            valueStyle={{
              color: asset.grow ? "#3f8600" : "#cf1322",
            }}
            prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            suffix="$"
          />
          <List
            size="small"
            dataSource={[
              {
                title: "Total Profit",
                value: asset.totalProfit,
                withTag: true,
              },
              { title: "Total Amount", value: asset.amount, isPlain: true },
              // { title: "Difference", value: asset.growPercent },
            ]}
            renderItem={item => (
              <List.Item>
                <span>{item.title}</span>
                <span>
                  {item.withTag && (
                    <Tag color={asset.grow ? "green" : "red"}>
                      {asset.growPercent}%
                    </Tag>
                  )}
                  {item.isPlain && item.value}
                  {!item.isPlain && (
                    <Typography.Text type={asset.grow ? "success" : "danger"}>
                      {item.value.toFixed(2)}$
                    </Typography.Text>
                  )}
                </span>
              </List.Item>
            )}
          />
        </Card>
      ))}
    </Layout.Sider>
  );
};
