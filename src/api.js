import axios from "axios";
import { cryptoAssets } from "./data";

export const fakeFetchCrypto = async () => {
  const options = {
    method: "GET",
    url: "https://openapiv1.coinstats.app/coins",
    headers: {
      accept: "application/json",
      "X-API-KEY": "tfRTLR4FBGUOq+xkmdmk5Zz/FxaEnOehx8/vLBiUsmI=",
    },
  };
  try {
    let res = await axios.request(options);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const FetchAssets = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 1000);
  });
};