/* @refresh reload */
import './index.css'

import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'

import App from './App'

import { lazy } from 'solid-js'

const Home = lazy(() => import('./pages/Home'))
const Albums = lazy(() => import('./pages/Albums'))
const Album = lazy(() => import('./pages/Album'))
const About = lazy(() => import('./pages/About'))

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  )
}

render(
  () => (
    <Router root={App}>
      <Route path='/' component={Home} />
      <Route path='/albums' component={Albums} />
      <Route path='/albums/:album' component={Album} />
      <Route path='/about' component={About} />
    </Router>
  ),
  root!,
)
