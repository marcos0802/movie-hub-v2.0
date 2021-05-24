import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MediaDetail from "./pages/MediaDetail/MediaDetail";
import Movies from "./pages/Movies/Movies";
import Search from "./pages/Search/Search";
import Series from "./pages/Series/Series";
import Trending from "./pages/Trending/Trending";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/trending" component={Trending} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route path="/search" component={Search} />
        <Route path="/detail/:Id&:mediaType" component={MediaDetail} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
