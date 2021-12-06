let token = localStorage.getItem("token");
let admin = localStorage.getItem("isAdmin")
let userData;
let cardFooter;
let addFooter;
let productData;
let idName = [];
const counts = [];


if(admin == "true"){

	fetch("https://orig-capstone.herokuapp.com/api/users/",
		{
			headers: {
					"Authorization": `Bearer ${token}`
			}
		})
	.then( response => response.json())
	.then( response =>{
	
		if(response.length < 1){
		//if array empty
			userData = `No users Available`

		
		} else {
		//display users
			userData = response.map( (user) => {
				if (user.isAdmin) {
					cardFooter =
					`
						<a href="./adminFalse.html?userId=${user._id}" class="btn btn-success btn-block">Set as Non-admin</a>
	
					`
				} else {
					cardFooter =
					`
						<a href="./adminTrue.html?userId=${user._id}" class="btn btn-danger btn-block">Set as Admin</a>

					`

				}

				return (		
					`
						<div class="card" style="width: 22rem;">
						  <div class="card-body">
						    <h5 class="card-title">User ID: ${user._id}</h5>
						    <p class="card-text text-left">Email: ${user.email}</p>
						    <p class="card-text text-left">Admin: ${user.isAdmin}</p>
						    <div class="card-footer">${cardFooter}</div>
						  </div>
						</div>
					`
					)
			}).join(" ")
		}
		let container = document.getElementById("userContainer");
		container.innerHTML = userData
	}) 

} /*else {

	fetch("https://orig-capstone.herokuapp.com/api/orders/myOrders",
	{
		headers: {
				"Authorization": `Bearer ${token}`
		}
	})
	.then( response => response.json())
	.then( response =>{
	let orderObject = [response]
	let orderArray = response

		if(orderObject.length < 1){ 
		//if array empty
			orderData = `No products Available`

		
		} else {
			/////////////////////////////////////////////////
			fetch("https://orig-capstone.herokuapp.com/api/products/all")
			.then( res => res.json())
			.then( res =>{

				//key value pair for id and name
				for(let i = 0; i < res.length; i++){
				      const { _id, name } = res[i];
				      idName[_id] = name;
				}

				//remove duplicate values
				let filteredProduct = [...new Set(response.productId)];

				//count values
				response.productId.forEach( (id) => {
					counts[id] = (counts[id] || 0) + 1
				})

				//replace cart productId with product name
				let finalProduct = [];
				let keys = Object.keys(idName);
				let values = Object.values(idName);

				for(let i = 0; i < keys.length; i++){
					if(filteredProduct.includes(keys[i])){

						finalProduct.push(values[i])

					}
					
				}
				let countValue = Object.values(counts)
				
				let first = finalProduct.join("<br>");
				let second = countValue.join("<br>Quantity: ");
				addFooter = 
					`
						<table>
						  <tr>
						    <td>${first}<br></td>
						     <td></td>
						     <td></td>
						     <td></td>
						    <td>Quantity: ${second}</td>
						  </tr>
						</table>
					`
				
			
				///////////////////////////////////////////
				//display products
					orderData = orderObject.map( (order) => { 
						if (order.isCheckout) {
							cardFooter =
							`
								<a href="#" class="btn btn-light btn-block">Order completed</a>
							`
						} else {
							cardFooter =
							`
								<a href="./finalCheckout.html" class="btn btn-success btn-block">Check out</a>
							`

						} 
						return (
							`
								<div class="card" style="width: 30rem;">
								  <div class="card-body">
								    <h5 class="card-title"><span>&#8369;</span>Total Price: ${order.totalPrice}</h5>
								    <p class="card-text text-left">Total Orders: ${order.totalAmount}</p>
								  	<p class="card-text text-left">Products: ${addFooter}</p>

								    <div class="card-footer">${cardFooter}</div>
								  </div>
								</div>
							`
						)
						
					}).join(" ")
					let container = document.getElementById("orderContainer");
					container.innerHTML = orderData
			})

		
		}
		
	}) 
}
*/





