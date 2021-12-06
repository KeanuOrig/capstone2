
let registerForm = document.getElementById("registerUser");

registerForm.addEventListener("submit", (e) => {
	e.preventDefault();

let email = document.getElementById('email').value
let password = document.getElementById("pw").value
let cpw = document.getElementById("cpw").value

	if(password == cpw){
		
		fetch("https://orig-capstone.herokuapp.com/api/users/email-exists", 
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email: email
				})
			}
		).then( response => response.json())
		.then(response => {
			// console.log(response)	//true

			if(response){

				fetch("https://orig-capstone.herokuapp.com/api/users/register",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email: email,
							password: password
						})
					}
				).then(response => response.json())
				.then(response => {
					// console.log(response)	//true

					if(response){
						alert(`Successfully Registered! You may now login.`)

						window.location.replace("./login.html")

					} else {
						alert(`Something went wrong. Please try again!`)
					}
				})
			}
		})
	}



});