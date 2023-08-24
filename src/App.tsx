import { evaluate } from "mathjs";
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
	const [input, set_input] = useState<string>("0");

	function append_input(event: React.MouseEvent<HTMLButtonElement>): void {
		const { "innerText": btn_value } = event.target as HTMLButtonElement;
		const is_input_initial_state = input === "0";
		const is_btn_value_zero = btn_value === "0";
		const must_not_append = is_input_initial_state && is_btn_value_zero;
		const is_appending_initially = is_input_initial_state && !is_btn_value_zero;
		const can_append_continuously = !is_input_initial_state;

		if (must_not_append) set_input("0");
		if (is_appending_initially) set_input(`${btn_value}`);
		if (can_append_continuously) set_input(`${input}${btn_value}`);
	}
	const clear_input = (): void => set_input("0");
	function evaluate_input(): void {
		if (input === "0") return;

		const evaluated_val = String(evaluate(input));
		set_input(evaluated_val);
	}

	return (
		<>
			<div id="display">
				{input}
			</div>
			<button id="equals" onClick={evaluate_input}>=</button>
			{num_buttons.map(({ id, value }) => (
				<button
					key={id}
					id={id}
					onClick={append_input}
				>
					{value}
				</button>
			))}
			{operator_buttons.map(({ id, value }) => (
				<button
					key={id}
					id={id}
					onClick={append_input}
				>
					{value}
				</button>
			))}
			<button id="decimal">.</button>
			<button id="clear" onClick={clear_input}>C</button>
		</>
	);
}

export default App;
