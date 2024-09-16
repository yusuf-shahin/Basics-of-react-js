import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import First from "./components/First.jsx";
import SimpleRender from "./components/SimpleRender.jsx";
import SimpleBookList from "./components/SimpleBookList.jsx";
import PropsBookList from "./components/PropsBookList.jsx";
import PropsBookListTwo from "./components/PropsBookListTwo.jsx";

const root = document.getElementById("root");
createRoot(root).render(
  <StrictMode>
    {/* <First /> */}
    {/* <SimpleRender /> */}
    {/* <SimpleBookList /> */}
    {/* <PropsBookList /> */}
    {/* <PropsBookListTwo /> */}
  </StrictMode>
);
