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
				backgroundColor: 'Indigo',
				border: '4px solid MediumSlateBlue',
				padding: 20
			}
		};
		return (
			<div className="App" style={styles.wrapper}>
				I AM CHILD ONE APP
      		</div>
		);
	}

	componentDidCatch(error, info) {
		console.log('Child One App Error:', error);
		console.log('Child One App Error Info:', info);
	}
}

export default App;
