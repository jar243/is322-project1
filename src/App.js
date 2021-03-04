import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Header, LandingPage, ProductPage, Footer } from "./components";
import getAllProducts from "./db"

function App() {

  const mockProductData = getAllProducts()

  return (
      <Router>

        <Header />

        <Switch>

          <Route path='/landing-page' component={LandingPage} />

          <Route path='/product-list'>
            <ProductPage
              products={mockProductData}
            />
          </Route>

          <Route path="/"> <Redirect to="/landing-page" /> </Route>

        </Switch>

        <Footer />

      </Router>
  )

}

export default App;
