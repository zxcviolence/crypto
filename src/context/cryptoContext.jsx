import React from "react";
import { FetchAssets, fakeFetchCrypto } from "../api";
import { percentDifference } from "../utils";

export const CryptoContext = React.createContext({
  assets: [],
  crypto: [],
  loading: false,
});

export const CryptoContextProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [crypto, setCrypto] = React.useState([]);
  const [assets, setAssets] = React.useState([]);

  React.useEffect(() => {
    const preload = async () => {
      setLoading(true);
      const { result } = await fakeFetchCrypto();
      const assets = await FetchAssets();

      setAssets(
        assets.map(asset => {
          const coin = result.find(c => c.id === asset.id);

          return {
            grow: asset.price < coin.price,
            growPercent: percentDifference(asset.price, coin.price),
            totalAmount: asset.amount * coin.price,
            totalProfit: asset.amount * coin.price - asset.amount * asset.price,
            ...asset,
          };
        })
      );
      setCrypto(result);
      setLoading(false);
    };
    preload();
  }, []);

  return (
    <CryptoContext.Provider value={{ loading, assets, crypto }}>
      {children}
    </CryptoContext.Provider>
  );
};
