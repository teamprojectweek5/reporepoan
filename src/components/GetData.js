import axios from "axios";

export function GetData() {
	axios
	.post(`https://cobacoba-hayepe.herokuapp.com/user/register`, {
	{
		mobileNumber: your_number,
		firstName: your_first_name,
		lastName: your_last_name,
		dateOfBirth: your_birth_data, // can accept all data 06/07/1993 or 1993/12/01
		gender: your_gender, // male or female,
		email: your_email,
		password: your_password
	}})
	
		  .then(result => console.log(result))
		  .catch(error => console.log(error));
};
