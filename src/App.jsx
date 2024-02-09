import { CryptoContextProvider } from "./context/cryptoContext";
import { AppLayout } from "./components/Layout/AppLayout";

export const App = () => {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
};
