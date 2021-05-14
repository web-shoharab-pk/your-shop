import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import AddProduct from "./components/AddProduct/AddProduct";
import Checkout from "./components/Checkout/Checkout";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import Orders from "./components/Orders/Orders";



export const UserContaxt = createContext();

function App() {

  const [userDetails, setUserDetails] = useState({})
  const [order, setOrder] = useState()
  return (
    <UserContaxt.Provider value={{
      userDetails: userDetails,
      setUserDetails: setUserDetails,
      order: order,
      setOrder: setOrder
    }}>

      <Router>
        <Header />
        <Switch>
          <Route path="/about">

          </Route>
          <Route path="/users">

          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRouter path="/admin">
            <Admin />
          </PrivateRouter>
          <Route path="/manageProduct">
            <ManageProduct />
          </Route>
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <PrivateRouter path="/checkout">
            <Checkout />
          </PrivateRouter>
          <PrivateRouter path="/orders">
             <Orders />
          </PrivateRouter>
        </Switch>
      </Router>

    </UserContaxt.Provider>
  );
}

export default App;
