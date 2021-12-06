

let params = new URLSearchParams(window.location.search);
let id = params.get("userId");
let token = localStorage.getItem("token");
console.log(id)
fetch(`https://orig-capstone.herokuapp.com/api/users/${id}/setAsAdmin`,
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
