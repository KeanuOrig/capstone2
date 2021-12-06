let params = new URLSearchParams(window.location.search);
let id = params.get("userId");
let token = localStorage.getItem("token");

fetch(`https://orig-capstone.herokuapp.com/api/users/${id}/unsetAsAdmin`,
	{
		method:"PUT",
		headers: {
			"Authorization": `Bearer ${token}`
		}
	}
).then( response => response.json())
.then( response =>{
	if(response){

		window.location.replace("./setAdmin.html")

	}
})
