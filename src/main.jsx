import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import Greeting from "./Greeting.jsx";
// import Greeting1 from './Greeting1.jsx';
// import { Talk, Talk1 } from './Greeting2.jsx';
// import { cube, foo, graph } from "./module1.js";
import { AddStudent } from "./Student.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Greeting />
    <Greeting1 />
    <Talk />
    <Talk1 /> */}

    <AddStudent />
  </StrictMode>
);
