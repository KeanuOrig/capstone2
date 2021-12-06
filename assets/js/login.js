
const loginForm = document.getElementById("loginUser")


loginForm.addEventListener("submit", (e) => {
	e.preventDefault()

const email = document.getElementById("email").value
const pw = document.getElementById("pw").value


	if(email != "" || pw != ""){
		fetch("https://orig-capstone.herokuapp.com/api/users/login", 
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email: email,
					password: pw
				})
			}
		).then( response => response.json())
		.then(response => {
			console.log(response)	//object ---> access token

			// localStorage
				//setItem("property name", value)
				//getItem("property name")

				localStorage.setItem("token", response.access)

				if(response.access){

					let token = localStorage.getItem("token")

					fetch("https://orig-capstone.herokuapp.com/api/users/details", 
						{
							method: "GET",
							headers: {
								"Content-Type": "application",
								"Authorization": `Bearer ${token}`
							}
						}
					).then(response => response.json())
					.then(response => {
						console.log(response)	//user document
						const {isAdmin, _id} = response

						localStorage.setItem("isAdmin", isAdmin)
						localStorage.setItem("userId", _id)


						window.location.replace("./products.html")
					})

				}
		})
		
	} else {
		alert("Please fill in email and password")
	}
})