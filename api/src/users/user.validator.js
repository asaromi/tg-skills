export const createUserRules = {
	name: "required|regex:/^[A-Za-z\\s\\W]*$/",
	email: "required|string|email",
	phoneNumber: "required|numeric",
	jobTitle: "string",
	gender: "in:male,female",
	address: "string"
}