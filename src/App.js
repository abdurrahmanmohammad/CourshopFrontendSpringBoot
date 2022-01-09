import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import ProductDetails from "./screens/ProductDetails";
import Login from "./screens/Login";
import Register from "./screens/Register";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import UserProfile from "./screens/UserProfile";
import OrderHistory from "./screens/OrderHistory";
import OrderDetails from "./screens/OrderDetails";
import OrderList from "./screens/OrderList";
import ProductList from "./screens/ProductList";
import ProductEdit from "./screens/ProductEdit";
import UserList from "./screens/UserList";
import UserEdit from "./screens/UserEdit";
import ProductCreate from "./screens/ProductCreate";
import Cart from "./screens/Cart";
import Shipping from "./screens/Shipping";
import Payment from "./screens/Payment";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/** *************** Unregistered users *************** */}
      <Route path="/" component={HomeScreen} exact />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/product/:id" component={ProductDetails} exact />
      {/** *************** Registered users *************** */}
      <PrivateRoute path="/orderhistory" component={OrderHistory} />
      <PrivateRoute path="/order/my/:id" component={OrderDetails} exact />
      <PrivateRoute path="/profile" component={UserProfile} />
      <PrivateRoute path="/cart" component={Cart} />
      <PrivateRoute path="/shipping" component={Shipping} />
      <PrivateRoute path="/payment" component={Payment} />
      {/** *************** Admin users *************** */}
      <AdminRoute path="/order/:id" component={OrderDetails} exact />
      <AdminRoute path="/orderlist" component={OrderList} />
      <AdminRoute path="/productlist" component={ProductList} />
      <AdminRoute path="/product/:id/edit" component={ProductEdit} exact />
      <AdminRoute path="/userlist" component={UserList} />
      <AdminRoute path="/user/:id/edit" component={UserEdit} exact />
      <AdminRoute path="/createproduct" component={ProductCreate} exact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
