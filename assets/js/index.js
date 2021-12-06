let userId = localStorage.getItem("userId");
let navSessionContainer = document.getElementById("navSession");
let registerContainer = document.getElementById("register");
let path = window.location.pathname;



if(userId) {
	console.log(path)
	navSessionContainer.innerHTML = 
	`
		<li class="nav-item">
		 	<a class="nav-link" href="./pages/logout.html">Logout</a>
		</li>
	`
} else {
	navSessionContainer.innerHTML = 
	`
		<li class="nav-item">
		 	<a class="nav-link" href="./pages/login.html">Login</a>
		</li>
	`
	registerContainer.innerHTML = 
	`
		<li class="nav-item">
		 	<a class="nav-link" href="./pages/register.html">Register</a>
		</li>
	`

}