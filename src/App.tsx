import { evaluate } from "mathjs";
import {
	useState,
	type ReactElement
} from "react";

import type { Operation } from "./types";

import { NUM_BUTTONS, OPERATOR_BUTTONS, OPERATIONS } from "./constants";

import "./App.css";

function App(): ReactElement {
	const [input, set_input] = useState<string>("0");

	function append_input(event: React.MouseEvent<HTMLButtonElement>): void {
		const { "innerText": btn_value } = event.target as HTMLButtonElement;
		const is_input_initial_state = input === "0";
		const is_btn_value_zero = btn_value === "0";
		const is_btn_value_decimal = btn_value === ".";
		const must_not_append = is_input_initial_state && is_btn_value_zero;
		const is_appending_operation = OPERATIONS.indexOf(btn_value as Operation) !== -1;
		const is_appending_initially = is_input_initial_state
			&& !is_btn_value_zero
			&& !is_btn_value_decimal;
		const can_append_continuously = !is_input_initial_state
			&& !is_btn_value_decimal;

		if (must_not_append) set_input("0");
		else if (is_btn_value_decimal) {
			const last_term = String(input.split(/[^\d\.?\d*]/g).pop());
			const has_decimal = last_term.includes(".");
			if (!has_decimal) set_input(`${input}.`);
		}
		else if (is_appending_operation) {
			const last_character = String(input.split("").pop());
			const is_last_character_operation = OPERATIONS.indexOf(last_character as Operation) !== -1;

			// Multiplication of negative numbers.
			// TODO: This could be better...
			const is_multiplying_to_negative_number = last_character === "*" &&  btn_value === "-";
			const must_change_last_two_characters = input.endsWith("*-") && btn_value === "+";

			if (!is_last_character_operation || is_multiplying_to_negative_number) set_input(`${input}${btn_value}`);
			else if (must_change_last_two_characters) set_input(`${input.substring(0,input.length-2)}${btn_value}`);
			else set_input(`${input.substring(0,input.length-1)}${btn_value}`);
		}
		else if (is_appending_initially) set_input(`${btn_value}`);
		else if (can_append_continuously) set_input(`${input}${btn_value}`);
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
			{NUM_BUTTONS.map(({ id, value }) => (
				<button
					key={id}
					id={id}
					onClick={append_input}
				>
					{value}
				</button>
			))}
			{OPERATOR_BUTTONS.map(({ id, value }) => (
				<button
					key={id}
					id={id}
					onClick={append_input}
				>
					{value}
				</button>
			))}
			<button id="decimal" onClick={append_input}>.</button>
			<button id="clear" onClick={clear_input}>C</button>
		</>
	);
}

export default App;
