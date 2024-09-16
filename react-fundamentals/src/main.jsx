import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Basics from "./Basics.jsx";
import "./index.css";

const root = document.getElementById("root");
createRoot(root).render(
  <StrictMode>
    <Basics />
  </StrictMode>
);

//? create a div ---> <div id="root"></div> in HTNL.
//? in main.jsx import "createRoot" function from "react-dom/client". IN react it gives us a vartual DOM by createRoot().
//? Inside createRoot() function we pass our "div" .
//? this function render our component.
//? Every parent component stand in here . For example --->

//* createRoot(root).render(
//*  <StrictMode>
//*     <Navbar />
//*     <Header />
//*     <Main />
//*     <Footer />
//*  </StrictMode>
//* );
