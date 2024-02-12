import React from "react";
import { Button, Layout, Modal, Select, Space, Drawer } from "antd";
import { useCrypto } from "../../../hooks/useCrypto";
import styles from "./header.module.scss";
import { CoinInfoModal } from "../../CoinInfoModal";
import { AddAssetForm } from "../../AddAssetForm";

export const AppHeader = () => {
  const [select, setSelect] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [coin, setCoin] = React.useState(null);
  const [drawer, setDrawer] = React.useState(false);

  const { crypto } = useCrypto();

  React.useEffect(() => {
    const keypress = event => {
      if (event.key === "/") {
        setSelect(prev => !prev);
      }
    };
    document.addEventListener("keypress", keypress);

    return () => document.removeEventListener("keypress", keypress);
  }, []);

  const handleSelect = value => {
    setCoin(crypto.find(c => c.id === value));
    setModal(true);
  };

  return (
    <Layout.Header className={styles.headerStyle}>
      <Select
        style={{
          width: 250,
        }}
        open={select}
        onClick={() => setSelect(prev => !prev)}
        onSelect={handleSelect}
        value="press / to open"
        options={crypto.map(coin => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={option => (
          <Space>
            <img
              style={{ width: 20 }}
              src={option.data.icon}
              alt={option.data.label}
            />
            {option.data.label}
          </Space>
        )}
      />

      <Button type="primary" onClick={() => setDrawer(true)}>
        Add Asset
      </Button>

      <Modal open={modal} onCancel={() => setModal(false)} footer={null}>
        <CoinInfoModal coin={coin} />
      </Modal>

      <Drawer
        width={600}
        destroyOnClose
        title="Add Asset"
        onClose={() => setDrawer(false)}
        open={drawer}
      >
        <AddAssetForm onClose={() => setDrawer(false)} />
      </Drawer>
    </Layout.Header>
  );
};
