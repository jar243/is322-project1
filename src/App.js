import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Header, LandingPage, ProductList, Footer } from "./components";
import getAllProducts from "./db"

function App() {

  const mockProductData = getAllProducts()

  return (
    <div className="App">
      <Router>

        <Header />

        <Switch>
          <Route exact path="/"> <Redirect to="/landing-page" /> </Route>
          <Route exact path="/landing-page" component={LandingPage} />
          <Route exact path="/product-list">
            <ProductList
              products={mockProductData}
            />
          </Route>
        </Switch>

        <Footer />

      </Router>
    </div>
  )

}

export default App;
