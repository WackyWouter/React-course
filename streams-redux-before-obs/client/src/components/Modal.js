import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div
			onClick={props.onDismiss}
			className="ui dimmer modals visible active"
		>
			<div
				// This stops the click event from bubling up to the above onclick so that the modal doesnt close when you click on the modal itself
				onClick={(e) => e.stopPropagation()}
				className="ui standard modal visible active"
			>
				<div className="header">{props.title}</div>
				<div className="content">{props.content}</div>
				<div className="actions">{props.actions}</div>
			</div>
		</div>,
		document.querySelector("#modal")
	);
};

export default Modal;
