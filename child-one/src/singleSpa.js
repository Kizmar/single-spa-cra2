import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react'
import App from './App';

const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: App,
	domElementGetter,
})

export const bootstrap = [
	() => {
		return Promise.resolve()
	},
	reactLifecycles.bootstrap,
]

export const mount = [
	reactLifecycles.mount,
]

export const unmount = [
	reactLifecycles.unmount,
]

function domElementGetter() {
	return document.getElementById('child-one-app') // This Id is what the parent uses in it's placeholder <div />
}