/* @refresh reload */
import { hydrate } from 'solid-js/web'
import App from './App'

import "virtual:uno.css"

const element = document.getElementById('app')

if(!element) throw new Error("No entry element found")

hydrate(() => <App />, element)
