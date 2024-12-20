import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import First from "./components/First.jsx"
import SimpleRender from "./components/SimpleRender.jsx"
import SimpleBookList from "./components/SimpleBookList.jsx"
import PropsBookList from "./components/PropsBookList.jsx"
import PropsBookListTwo from "./components/PropsBookListTwo.jsx"
import MapPropsBookList from "./components/MapPropsBookList.jsx"
import FirstEvent from "./components/FirstEvent.jsx"
import FromSubmission from "./components/FromSubmission.jsx"
import ChildrenProp from "./ChildrenProps.jsx"

const root = document.getElementById("root")
createRoot(root).render(
  <StrictMode>
    {/* <First /> */}
    {/* <SimpleRender /> */}
    {/* <SimpleBookList /> */}
    {/* <PropsBookList /> */}
    {/* <PropsBookListTwo /> */}
    <ChildrenProp />
    {/* <MapPropsBookList /> */}
    {/* <FirstEvent /> */}
    {/* <FromSubmission /> */}
  </StrictMode>
)
