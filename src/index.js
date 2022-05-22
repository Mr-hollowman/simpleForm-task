import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SimpleForm from "./SimpleForm";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SimpleForm />
  </StrictMode>
);
