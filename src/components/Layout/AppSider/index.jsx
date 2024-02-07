import { Layout } from "antd";
import styles from "./sider.module.scss";

export const AppSider = () => {
  return (
    <Layout.Sider width="25%" className={styles.siderStyle}>
     Я СЫН ШЛЮхИ, КОТОРЫЙ НЕ МЕНЯЕТ СВОЙ БЭКГРРАУНД
    </Layout.Sider>
  );
};
