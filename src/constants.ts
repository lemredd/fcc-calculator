export const NUM_BUTTONS = [
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

export const OPERATOR_BUTTONS = [
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
] as const;
export const OPERATIONS = OPERATOR_BUTTONS.map(btn => btn.value);
