import React, { Component } from 'react';
import './App.css';

// SINGLE-SPA NOTES
// - Import global CSS in index.js so it's not included in the Single-spa app package
// - Styles specific to this app only should be imported in App.js

class App extends Component {
	render() {
		const styles = {
			wrapper: {
				color: '#ffffff',
				backgroundColor: 'Blue',
				border: '4px solid CornflowerBlue',
				padding: 20
			}
		};
		return (
			<div className="App" style={styles.wrapper}>
				I AM CHILD TWO APP
      		</div>
		);
	}

	componentDidCatch(error, info) {
		console.log('Child Two App Error:', error);
		console.log('Child Two App Error Info:', info);
	}
}

export default App;
