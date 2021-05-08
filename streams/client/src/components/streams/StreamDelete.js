import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends Component {
	componentDidMount() {
		// match.params.id gets the id from the url
		this.props.fetchStream(this.props.match.params.id);
	}

	renderActions() {
		const { id } = this.props.match.params;
		return (
			// React fragments
			<>
				<button
					onClick={() => this.props.deleteStream(id)}
					className="ui button negative"
				>
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</>
		);
	}

	renderContent() {
		if (!this.props.stream) {
			return "Are you sure you want to delete this stream";
		}
		return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
	}

	render() {
		return (
			<Modal
				title="Delete Stream"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push("/")}
			/>
		);
	}
}

// Own props is the same as the props of the component
const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
	StreamDelete
);
