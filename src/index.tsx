import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { MainApp } from "./apps/MainApp";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";
import { store } from "./store";
export const StoreContext = createContext(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <StoreContext.Provider value={store}>
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </StoreContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
