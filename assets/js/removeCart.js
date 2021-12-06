let params = new URLSearchParams(window.location.search);
let productId = params.get("productId");
let token = localStorage.getItem("token");
let admin = localStorage.getItem("isAdmin")

if (admin == `false`){
	
	fetch(`https://orig-capstone.herokuapp.com/api/orders/delete/${productId}`,
		{
			method:"POST",
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
	alert(`Product successfully removed!`)
} else {
	alert(`Something went wrong`)
}




