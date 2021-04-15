import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component {
	state = { lat: null, errorMessage: "" };

	// Good place to data loading!
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(error) => this.setState({ errorMessage: error.message })
		);
	}

	// Good place to do more data-loading when state/props change
	componentDidUpdate() {}

	// Good place to do cleanup (especially for non-React stuff)
	componentWillUnmount() {}

	// React says we have to define render!!
	// We dont want getCurrentPosition in render function cause the render function gets called very frequently
	// avoid doing anything besides returning jsx
	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <div>Loading!</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
