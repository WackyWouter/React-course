import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				onClick={() => onSelectedChange(option)}
				className="item"
				key={option.value}
			>
				{option.label}
			</div>
		);
	});

	useEffect(() => {
		const onBodyClick = (event) => {
			// look wether the element that was clicked on it is a child of our dropdown
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};

		document.body.addEventListener("click", onBodyClick, { capture: true });

		return () => {
			document.body.removeEventListener("click", onBodyClick, {
				capture: true,
			});
		};
	}, []);

	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${
						open ? "visible active" : ""
					}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? "visible transition" : ""}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
