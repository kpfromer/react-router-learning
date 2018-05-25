import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Courses from "./Courses";
import Teachers from "./Teachers";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      {/* With out the exact prop the /about component will also be rendered */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/courses" component={Courses} />
      {/* You can use render and pass a function! useful for passing props */}
      <Route path="/teachers" render={() => <Teachers />} />
    </div>
  </BrowserRouter>
);

export default App;