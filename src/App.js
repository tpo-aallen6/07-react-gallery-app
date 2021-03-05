import React, { Component } from 'react'
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect
} from 'react-router-dom'
import './index.css'
import Gallery from './components/Gallery'
import SearchForm from './components/SearchForm'
import Nav from './components/Nav'
import PageNotFound from './components/PageNotFound'
import config from './config'

class App extends Component {
  constructor () {
    super()
    this.defaultCategories = ['cats', 'dogs', 'birds']
  }

  render () {
    return (
      <BrowserRouter>
        <div className='container'>
          <SearchForm />
          <Nav categories={this.defaultCategories} />
          <Switch>
            <Route exact path='/'>
              <Redirect to={`/search/${this.defaultCategories[0]}`} />
            </Route>
            <Route exact path='/search/:query' render={(match) => <Gallery searchTerm={match.match.params.query} apiKey={config} />} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
