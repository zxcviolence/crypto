import React from "react";
import { FetchAssets, fetchCrypto } from "../api";
import { percentDifference } from "../utils/utils";

export const CryptoContext = React.createContext({
  assets: [],
  crypto: [],
  loading: false,
});

export const CryptoContextProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [crypto, setCrypto] = React.useState([]);
  const [assets, setAssets] = React.useState([]);

  const mapAssets = (assets, result) => {
    return assets.map(asset => {
      const coin = result.find(c => c.id === asset.id);

      return {
        grow: asset.price < coin.price,
        growPercent: percentDifference(asset.price, coin.price),
        totalAmount: asset.amount * coin.price,
        totalProfit: asset.amount * coin.price - asset.amount * asset.price,
        name: coin.name,
        ...asset,
      };
    });
  };

  React.useEffect(() => {
    const preload = async () => {
      setLoading(true);
      const { result } = await fetchCrypto();
      const assets = await FetchAssets();

      setAssets(mapAssets(assets, result));
      setCrypto(result);
      setLoading(false);
    };
    preload();
  }, []);

  const addAsset = newAsset => {
    setAssets(prev => mapAssets([...prev, newAsset], crypto));
  };

  return (
    <CryptoContext.Provider value={{ loading, assets, crypto, addAsset }}>
      {children}
    </CryptoContext.Provider>
  );
};
