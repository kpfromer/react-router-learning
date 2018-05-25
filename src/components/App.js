import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Courses from "./Courses";
import Teachers from "./Teachers";
import NotFound from "./NotFound";
import Featured from "./Featured";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      {/* With out the exact prop the /about component will also be rendered */}

      {/* Switch is basically express type 404 page */}
      {/* First url that matches will load */}
      {/* if none match fallback is the NotFound route */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/courses" component={Courses} />
        {/* You can use render and pass a function! useful for passing props */}
        <Route exact path="/teachers" render={() => <Teachers />} />
        {/*<Route path="/teachers/:topic/:fname-:lname" component={Featured} />*/}
        <Route path="/teachers/:topic/:fname/:lname?" component={Featured} />

        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;