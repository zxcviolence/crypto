import { cryptoData, cryptoAssets } from "./data";

export const fakeFetchCrypto = () => {
  new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 2000);
  });
};

export const FetchAssets = () => {
  new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 2000);
  });
};