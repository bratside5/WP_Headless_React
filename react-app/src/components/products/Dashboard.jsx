import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import ProductItem from './ProductItem'
import ProductPage from './ProductPage'
import Loading from '../util/Loading'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../global/NavBar'
import TailwindTest, { Navbar } from '../global/TailwindTest'
import AppStyles from '../../AppStyles/AppStyles.styles.tw'

const Dashboard = props => {
  const [data, loading] = useFetch('/wp-json/wp/v2/products/')
  return (
    <>
      <Router>
        <NavBar />
        <AppStyles>
          <Switch>
            {loading ? (
              <Loading />
            ) : (
              <>
                <Route exact path='/'>
                  <h1>Landing Page</h1>
                </Route>
                <Route exact path='/products'>
                  <ProductItem data={data} />
                </Route>
                <Route path='/products/:id'>
                  <ProductPage />
                </Route>
                <Route exact path='/uitests'>
                  <TailwindTest />
                </Route>
              </>
            )}
          </Switch>
        </AppStyles>
      </Router>
    </>
  )
}
export default Dashboard
