import React from "react";
import ReactDOM from "react-dom";

import HomeScreen from "./components/home/homescreen";
import "./styles.css";

import { HomePairs } from "./data/home";

const rootElement = document.getElementById("root");
ReactDOM.render(<HomeScreen books={HomePairs} />, rootElement);
