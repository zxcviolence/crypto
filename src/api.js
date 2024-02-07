import { cryptoData, cryptoAssets } from "./data";

export const fakeFetchCrypto = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 0);
  });
};

export const FetchAssets = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 0);
  });
};
