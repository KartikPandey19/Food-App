import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://www.creativefabrica.com/wp-content/uploads/2020/02/10/Food-Logo-Graphics-1-12.jpg"></img>
        </div>
        <div className="nav-items">
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  
  const AppLayout = () => {
    return (
    <div className="app">
      <Header/>
    </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout />);