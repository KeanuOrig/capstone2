
let params = new URLSearchParams(window.location.search);
let productId = params.get("productId");
let token = localStorage.getItem("token");

fetch(`https://orig-capstone.herokuapp.com/api/products/${productId}/delete`,
	{
		method:"DELETE",
		headers: {
			"Authorization": `Bearer ${token}`
		}
	}
).then( response => response.json())
.then( response =>{
	if(response){

		window.location.replace("./products.html")

	}
})