import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	const [term, setState] = useState("programming");
	const [results, setResults] = useState([]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get(
				"http://en.wikipedia.org/w/api.php",
				{
					params: {
						action: "query",
						list: "search",
						origin: "*",
						format: "json",
						srsearch: term,
					},
				}
			);

			setResults(data.query.search);
		};

		if (term && !results.length) {
			search();
		} else {
			const timeoutId = setTimeout(() => {
				if (term) {
					search();
				}
			}, 500);

			// This is the cleanup function and gets called right before the next time useEffect is called
			return () => {
				clearTimeout(timeoutId);
			};
		}
	}, [term]);

	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
						className="ui button"
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					<span
						// execute html code in string. Dangerious watch out for XSS attacks!
						dangerouslySetInnerHTML={{ __html: result.snippet }}
					></span>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						value={term}
						onChange={(e) => setState(e.target.value)}
						className="input"
					/>
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
