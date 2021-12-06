let editProduct = document.getElementById("editProduct");

editProduct.addEventListener("submit", (e) => {
	e.preventDefault();

let name = document.getElementById('name').value
let description = document.getElementById("desc").value
let price = document.getElementById("price").value

let admin = localStorage.getItem("isAdmin")

let params = new URLSearchParams(window.location.search);
let productId = params.get("productId");
let token = localStorage.getItem("token");


	if(admin == "true"){
		adminButton.innerHTML = 

		`
			<div class="col-md-2 mt-5 offset-md-10">
				<a href="./createproduct.html" class="btn btn-primary">
					Create Product
				</a>
			</div>
		`

		fetch(`https://orig-capstone.herokuapp.com/api/products/${productId}/productId`,
			{
				method: "PUT",
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
				alert(`Edited Successfully!`)

				window.location.replace("./products.html")

			} else {
				alert(`Something went wrong. Please try again!`)
			}
		})
	} else {
		alert(`Not an admin!`)
	}
})