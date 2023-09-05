import { evaluate } from "mathjs";
import {
	useState,
	type ReactElement
} from "react";

import { NUM_BUTTONS, OPERATOR_BUTTONS } from "./constants";
import { condition_append, append_operation, append_decimal } from "./helpers";

import CalculatorButton from "./CalculatorButton";

import "./App.css";

function App(): ReactElement {
	const [input, set_input] = useState<string>("0");

	function append_input(event: React.MouseEvent<HTMLButtonElement>): void {
		const { "innerText": btn_value } = event.target as HTMLButtonElement;
		const conditions = condition_append(input, btn_value);

		if (conditions.must_not_append) set_input("0");
		else if (conditions.is_btn_value_decimal) append_decimal(input, set_input);
		else if (conditions.is_appending_operation) append_operation(input, btn_value, set_input);
		else if (conditions.is_appending_initially) set_input(`${btn_value}`);
		else if (conditions.can_append_continuously) set_input(`${input}${btn_value}`);
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
				<h2>{input}</h2>
			</div>
			<button id="equals" onClick={evaluate_input}>=</button>
			{NUM_BUTTONS.map(({ id, value }) => (
				<CalculatorButton
					key={id}
					id={id}
					className="numeric"
					value={value}
					onClick={append_input}
				/>
			))}
			{OPERATOR_BUTTONS.map(({ id, value }) => (
				<CalculatorButton
					key={id}
					id={id}
					className="operational"
					value={value}
					onClick={append_input}
				/>
			))}
			<button id="decimal" onClick={append_input}>.</button>
			<button id="clear" onClick={clear_input}>C</button>
		</>
	);
}

export default App;
