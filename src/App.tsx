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

function App(): ReactElement {

	return (
		<>
			<button id="equals">=</button>
			{num_buttons.map(({ id, value }) => <button key={id} id={id}>{value}</button>)}
		</>
	);
}

export default App;
