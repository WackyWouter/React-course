import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends Component {
	renderSubmit(contextValue) {
		return contextValue.language === "english" ? "submit" : "send";
	}

	render() {
		return (
			<ColorContext.Consumer>
				{(color) => (
					<button className={`ui button ${color}`}>
						<LanguageContext.Consumer>
							{(contextValue) => this.renderSubmit(contextValue)}
						</LanguageContext.Consumer>
					</button>
				)}
			</ColorContext.Consumer>
		);
	}
}

export default Button;
