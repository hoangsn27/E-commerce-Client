import "./App.css";
import "./css/custom.css";
import "./css/style.default.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "./Share/Footer/Footer";
import Header from "./Share/Header/Header";
import Chat from "./Share/Chat/Chat";

import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const Detail = lazy(() => import("./Detail/Detail"));
const Cart = lazy(() => import("./Cart/Cart"));
const SignIn = lazy(() => import("./Authentication/SignIn"));
const SignUp = lazy(() => import("./Authentication/SignUp"));
const History = lazy(() => import("./History/History"));
const Shop = lazy(() => import("./Shop/Shop"));
const Checkout = lazy(() => import("./Checkout/Checkout"));
const Infor = lazy(() => import("./Information/Infor"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />{" "}
          <Route path="/detail/:id" component={Detail} />{" "}
          <Route path="/cart" component={Cart} />{" "}
          <Route path="/signin" component={SignIn} />{" "}
          <Route path="/signup" component={SignUp} />{" "}
          <Route path="/checkout" component={Checkout} />{" "}
          <Route path="/history" component={History} />{" "}
          <Route path="/information" component={Infor} />{" "}
          <Route path="/shop" component={Shop} />
        </Switch>{" "}
      </BrowserRouter>

      <Chat />

      <Footer />
    </div>
  );
}

export default App;
