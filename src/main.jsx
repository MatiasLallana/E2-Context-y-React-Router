import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "./Styles/GlobalStyles.js";
import { ContextProvider } from "./Context/Context.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ContextProvider>
          <App />
        </ContextProvider>
        <GlobalStyles />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
