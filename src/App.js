import React, { Component } from 'react'
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom'
import './index.css'
import apiKey from './config'
import Gallery from './components/Gallery'
import SearchForm from './components/SearchForm'
import Nav from './components/Nav'
import NotFound from './components/NotFound'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      photos: [],
      query: ''
    }
  }

  // componentDidMount () {
  //   this.performSearch()
  // }

  performSearch = (query = this.state.query) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        const photos = responseData.photos.photo
        this.setState({
          photos: photos,
          query: query
        })
      })
      .catch(err => console.log('Error fetching data', err))
  }

  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            {/* <Route exact path="/" render={() => <Gallery data={this.state.photos} />} /> */}
            <Route path="/search/:query" >
              <p>{this.state.query}</p> {/* delete this line */}
              <SearchForm onSearch={this.performSearch} />
              <Nav performSearch={this.performSearch} />
              <Gallery data={this.state.photos} />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
