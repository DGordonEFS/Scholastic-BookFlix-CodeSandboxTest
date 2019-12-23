import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeScreen from "./components/home/homescreen";
import CategoryScreen from "./components/category/categoryscreen";

import "./css/bookflix.css";
import "./css/topbar.css";
import "./css/home.css";

import { HomePairs } from "./data/home";
import Category_ABC from "./data/categories/abcsand123s";
import Category_Adventure from "./data/categories/adventure";
import Category_Animals from "./data/categories/animalsandnature";
import Category_Celebrations from "./data/categories/celebrations";
import Category_Earth from "./data/categories/earthandsky";
import Category_Family from "./data/categories/familyandcommunity";
import Category_Imaginations from "./data/categories/imaginations";
import Category_Music from "./data/categories/musicandrhyme";
import Category_People from "./data/categories/peopleandplaces";

import "./css/category.css";

var categories = {};
categories[Category_ABC.category] = Category_ABC;
categories[Category_Adventure.category] = Category_Adventure;
categories[Category_Animals.category] = Category_Animals;
categories[Category_Celebrations.category] = Category_Celebrations;
categories[Category_Earth.category] = Category_Earth;
categories[Category_Family.category] = Category_Family;
categories[Category_Imaginations.category] = Category_Imaginations;
categories[Category_Music.category] = Category_Music;
categories[Category_People.category] = Category_People;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <HomeScreen books={HomePairs} />
      </Route>
      <Route
        path="/category/:id"
        render={props => <CategoryScreen {...props} data={categories} />}
      />
    </Switch>
  </Router>,
  rootElement
);

/*

  */
