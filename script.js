//your JS code here. If required.
function storage() {
	return (`First Name: ${document.getElementById("firstName").value} Last Name: ${document.getElementById("lastName").value} Phone Number: ${document.getElementById("phoneNumber").value} Email ID: ${document.getElementById("email").value}`);
}
let btn = document.getElementById("submit");
btn.addEventListener("click",()=> {
	alert(storage());
})