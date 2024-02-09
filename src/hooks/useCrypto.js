import React from "react";
import { CryptoContext } from "../context/cryptoContext";

export const useCrypto = () => React.useContext(CryptoContext);
