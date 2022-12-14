import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MapProvider } from "react-map-gl";
import { RecoilRoot } from "recoil";
import { RecoilURLSyncJSON } from "recoil-sync";

ReactDOM.render(
  <React.StrictMode>
    <MapProvider>
      <RecoilRoot>
        <RecoilURLSyncJSON location={{ part: "queryParams" }}>
          <App />
        </RecoilURLSyncJSON>
      </RecoilRoot>
    </MapProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
