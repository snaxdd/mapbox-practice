import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import "mapbox-gl/dist/mapbox-gl.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import App from "./app";

const firebaseConfig = {
  apiKey: "AIzaSyD3tQ_VLHxyElajpN9TnBq4Uw8LTKd0oWE",
  authDomain: "mapbox-practice.firebaseapp.com",
  projectId: "mapbox-practice",
  storageBucket: "mapbox-practice.appspot.com",
  messagingSenderId: "807675173855",
  appId: "1:807675173855:web:b5b8645c8781cce323c26a",
};

const firebaseApp = initializeApp(firebaseConfig);

const app = document.getElementById("root");
const root = ReactDOM.createRoot(app);

root.render(<App />);
