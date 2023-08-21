import {
	useState,
	type ReactElement
} from "react";

import "./App.css";

const num_buttons = [
	{
		"id": "zero",
		"value": 0,
	},
	{
		"id": "one",
		"value": 1,
	},
	{
		"id": "two",
		"value": 2,
	},
	{
		"id": "three",
		"value": 3,
	},
	{
		"id": "four",
		"value": 4,
	},
	{
		"id": "five",
		"value": 5,
	},
	{
		"id": "six",
		"value": 6,
	},
	{
		"id": "seven",
		"value": 7,
	},
	{
		"id": "eight",
		"value": 8,
	},
	{
		"id": "nine",
		"value": 9,
	},
] as const;

const operator_buttons = [
	{
		"id": "add",
		"value": "+"
	},
	{
		"id": "subtract",
		"value": "-"
	},
	{
		"id": "multiply",
		"value": "*"
	},
	{
		"id": "divide",
		"value": "/"
	},
];

function App(): ReactElement {
	const [input, set_input] = useState<string>("");

	return (
		<>
			<div id="display">
				<div id="input">{input}</div>
				<div id="output"></div>
			</div>
			<button id="equals">=</button>
			{num_buttons.map(({ id, value }) => (
				<button key={id} id={id}>
					{value}
				</button>
			))}
			{operator_buttons.map(({ id, value }) => <button key={id} id={id}>{value}</button>)}
			<button id="decimal">.</button>
			<button id="clear">C</button>
		</>
	);
}

export default App;
