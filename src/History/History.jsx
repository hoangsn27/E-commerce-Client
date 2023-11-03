import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import DetailHistory from "./Component/DetailHistory";
import MainHistory from "./Component/MainHistory";

function History(props) {
  // select expiryDate to check token is still valid
  const expiryDate = localStorage.getItem("expiryDate");
  const timeRemaining = new Date(expiryDate).getTime() - new Date().getTime();

  useEffect(() => {
    if (!expiryDate) {
      return window.location.replace("/signin");
    }

    // auto logout when expirydate token
    const autoLogout = (miliseconds) => {
      setTimeout(() => {
        localStorage.clear();
        window.location.replace("/signin");
      }, miliseconds);
    };

    autoLogout(timeRemaining);
  }, [timeRemaining]);

  return (
    <Switch>
      {expiryDate && <Route exact path="/history" component={MainHistory} />}

      {expiryDate && <Route path="/history/:id" component={DetailHistory} />}
    </Switch>
  );
}

export default History;
