import React from "react";
import ReactDOM from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import App from "./app";

const app = document.getElementById("root");
const root = ReactDOM.createRoot(app);

root.render(<App />);
