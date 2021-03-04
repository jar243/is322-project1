import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Header, LandingPage, ProductList, Footer } from "./components";
import getAllProducts from "./db"

function App() {

  const mockProductData = getAllProducts()

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>

        <Header />

        <Switch>

          <Route path='/landing-page' component={LandingPage} />

          <Route path='/product-list'>
            <ProductList
              products={mockProductData}
            />
          </Route>

          <Route path="/"> <Redirect to="/landing-page" /> </Route>

        </Switch>

        <Footer />

      </Router>
    </div>
  )

}

export default App;
