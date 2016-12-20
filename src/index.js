import React from 'react'
import Relay from 'react-relay'
import ReactDOM from 'react-dom'
import PokemonPage from './views/PokemonPage'
import ListPage from './views/ListPage'
import { Router, Route, browserHistory, applyRouterMiddleware, withRouter } from 'react-router'
import useRelay from 'react-router-relay'
import './index.css'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://api.graph.cool/relay/v1/ciwxni4382k0h0129wp79cvvj')
)

const ViewerQueries = { viewer: () => Relay.QL`query { viewer }` }

ReactDOM.render(
  <Router
    forceFetch
    environment={Relay.Store}
    render={applyRouterMiddleware(useRelay)}
    history={browserHistory}
  >
    <Route path='/' component={ListPage} queries={ViewerQueries} />
    <Route path='/create' component={withRouter(PokemonPage)} queries={ViewerQueries} />
    <Route path='/view/:id' component={withRouter(PokemonPage)} queries={ViewerQueries} />
  </Router>
  , document.getElementById('root')
)
