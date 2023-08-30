import { type ReactElement } from "react";

interface Props {
	id: string
	value: string
	onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function CalculatorButton({ id, value, onClick }: Props): ReactElement {
	return <button id={id} onClick={onClick}>{value}</button>;
}
