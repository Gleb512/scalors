import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import React from "react";
import Content from "./components/content";

function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <div className="container">
              <Content />
            </div>
          </div>
        </Provider>
      </BrowserRouter>
  );
}

export default App;
