let params = new URLSearchParams(window.location.search);
let productId = params.get("productId");
let token = localStorage.getItem("token");
let admin = localStorage.getItem("isAdmin")

if (admin == `false`){
	
	fetch(`https://orig-capstone.herokuapp.com/api/orders/checkoutmyorders`,
		{
			method:"PUT",
			headers: {
				"Authorization": `Bearer ${token}`
			}
		}
	).then( response => response.json())
	.then( response =>{
		if(response){

			window.location.replace("./cart.html")

		}
	})
	alert(`Orders were successfully checked out!`)
	window.location.replace("./cart.html")
} else {
	alert(`Something went wrong`)
}


