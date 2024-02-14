import { cryptoData, cryptoAssets } from "./data";

export const fakeFetchCrypto = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 1000);
  });
};

export const FetchAssets = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 1000);
  });
};
