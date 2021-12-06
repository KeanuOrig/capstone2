
let admin = localStorage.getItem("isAdmin")
let adminButton = document.getElementById("adminButton")
let productData;
let cardFooter;


if(admin == "true"){

	adminButton.innerHTML = 

	`
		<div class="col-md-2 mt-5 offset-md-10">
			<a href="./createproduct.html" class="btn btn-primary">
				Create Product
			</a>
		</div>
		<div class="col-md-2 mt-1 offset-md-10">
			<a href="./setAdmin.html" class="btn btn-secondary">
				Set User as Admin
			</a>
		</div>
	`
	fetch("https://orig-capstone.herokuapp.com/api/products/all")
	.then( response => response.json())
	.then( response =>{
	
		if(response.length < 1){
		//if array empty
			productData = `No products Available`

		
		} else {
		//display products
			productData = response.map( (product) => {

				if (product.isActive) {
					cardFooter =
					`
						<a href="./archiveproduct.html?productId=${product._id}" class="btn btn-danger btn-block">Archive product</a>

						<a href="./editproduct.html?productId=${product._id}" class="btn btn-primary btn-block">Edit product</a>

						<a href="./deleteproduct.html?productId=${product._id}" class="btn btn-secondary btn-block">Delete product</a>
					`
				} else {
					cardFooter =
					`
						<a href="./unarchiveproduct.html?productId=${product._id}" class="btn btn-success btn-block">Unarchive product</a>

						<a href="./deleteproduct.html?productId=${product._id}" class="btn btn-secondary btn-block">Delete product</a>
					`

				}

				return (		
					`
						<div class="card" style="width: 18rem;">
						  <div class="card-body">
						    <h5 class="card-title">${product.name}</h5>
						    <p class="card-text text-left">${product.description}</p>
						    <p class="card-text text-right"><span>&#8369;</span>${product.price}</p>
						    <div class="card-footer">${cardFooter}</div>
						  </div>
						</div>
					`
					)
			}).join(" ")
		}
		let container = document.getElementById("productContainer");
		container.innerHTML = productData
	}) 
} else {
	adminButton.innerHTML = null

	//fetch only active products for non-admin users
	fetch("https://orig-capstone.herokuapp.com/api/products")
	.then( response => response.json())
	.then( response =>{
	
		if(response.length < 1){ 
		//if array empty
			productData = `No products Available`

		
		} else {
		//display products
			productData = response.map( (product) => {
				return (		
					`
						<div class="card" style="width: 18rem;">
						  <div class="card-body">
						    <h5 class="card-title">${product.name}</h5>
						    <p class="card-text text-left">${product.description}</p>
						    <p class="card-text text-right"><span>&#8369;</span>${product.price}</p>
						    <a href="./checkout.html?productId=${product._id}" class="btn btn-success btn-block">Add to cart</a>
						    <a href="./removeCart.html?productId=${product._id}" class="btn btn-danger btn-block">Remove to cart</a>
						  </div>
						</div>
					`
					)
			}).join(" ")
		}
		let container = document.getElementById("productContainer");
		container.innerHTML = productData
	}) 
}






