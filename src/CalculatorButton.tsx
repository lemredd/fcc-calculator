import { type ReactElement } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	id: string
	value: number | string
	onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function CalculatorButton({ id, value, onClick, ...attribs }: Props): ReactElement {
	return <button id={id} onClick={onClick} {...attribs}>{value}</button>;
}
