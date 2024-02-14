import { Flex, Typography } from "antd";
import "./coinInfo.module.scss";

export const CoinInfo = ({ coin, withSymbol }) => {
  return (
    <Flex align="center">
      <img src={coin.icon} alt={coin.name} />
      <Typography.Title level={2} style={{ margin: 0 }}>
        {withSymbol && <span>({coin.symbol})</span>} {coin.name}
      </Typography.Title>
    </Flex>
  );
};
