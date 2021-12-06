let editProduct = document.getElementById("editProduct");

editProduct.addEventListener("submit", (e) => {
	e.preventDefault();

let name = document.getElementById('name').value
let description = document.getElementById("desc").value
let price = document.getElementById("price").value

let admin = localStorage.getItem("isAdmin")
let token = localStorage.getItem("token");


	if(admin == "true"){

		fetch(`https://orig-capstone.herokuapp.com/api/products/`,
			{
				method: "POST",
				headers: {
					"Authorization": `Bearer ${token}`,
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: name,
					description: description,
					price: price
				})
			}
		).then(response => response.json())
		.then(response => {

			if(response){
				alert(`Created Successfully!`)

				window.location.replace("./products.html")

			} else {
				alert(`Something went wrong. Please try again!`)
			}
		})
	} else {
		alert(`Not an admin!`)
	}
})