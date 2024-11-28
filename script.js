//your JS code here. If required.
function storage() {
	return (`First Name: ${document.getElementById("firstName").value} \n Last Name: ${document.getElementById("lastName").value} \n Phone Number: ${document.getElementById("phoneNumber").value} \n Email ID: ${document.getElementById("email").value}`);
}
let btn = document.getElementById("sub");
btn.addEventListener("click",()=> {
	alert(storage());
})