import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		};

		// Listen to the navigation event
		window.addEventListener("popstate", onLocationChange);

		return () => {
			// Remove the event listener in the clean up of use effect
			window.removeEventListener("popstate", onLocationChange);
		};
	}, []);

	return currentPath === path ? children : null;
};

export default Route;
