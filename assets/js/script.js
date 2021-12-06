let userId = localStorage.getItem("userId");
let navSessionContainer = document.getElementById("navSession");
let registerContainer = document.getElementById("register");
let path = window.location.pathname;



if(userId) {
	navSessionContainer.innerHTML = 
	`
		<li class="nav-item">
		 	<a class="nav-link" href="./logout.html">Logout</a>
		</li>
	`
} else {
	navSessionContainer.innerHTML = 
	`
		<li class="nav-item">
		 	<a class="nav-link" href="./login.html">Login</a>
		</li>
	`
	registerContainer.innerHTML = 
	`
		<li class="nav-item">
		 	<a class="nav-link" href="./register.html">Register</a>
		</li>
	`

}