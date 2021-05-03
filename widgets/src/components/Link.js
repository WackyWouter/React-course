import React from "react";

const Link = ({ className, href, children }) => {
	const onClick = (event) => {
		if (event.metaKey || event.ctrlKey) {
			return;
		}

		// prevent reload
		event.preventDefault();

		// change url
		window.history.pushState({}, "", href);

		// This will let the rout component know that the url has changed
		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent);
	};

	return (
		<a onClick={onClick} className={className} href={href}>
			{children}
		</a>
	);
};

export default Link;
