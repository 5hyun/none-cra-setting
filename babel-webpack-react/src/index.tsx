// ./src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Home /> // ./src/pages/Home.tsx 생성하고 index.tsx에 import 해주기
);
