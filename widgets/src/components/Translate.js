import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
	{
		label: "Afrikaans",
		value: "af",
	},
	{
		label: "Araboc",
		value: "ar",
	},
	{
		label: "Hindi",
		value: "hi",
	},
	{
		label: "Dutch",
		value: "nl",
	},
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState("");

	return (
		<div>
			<br />
			<div className="ui form">
				<div className="field">
					<label>Enter Text</label>
					<input
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
			</div>
			<br />
			<Dropdown
				selected={language}
				onSelectedChange={setLanguage}
				label="Choose the language from which you would like to translate"
				options={options}
			/>
			<hr />
			<h3 className=" ui header">Output </h3>
			<Convert text={text} language={language} />
		</div>
	);
};
export default Translate;
