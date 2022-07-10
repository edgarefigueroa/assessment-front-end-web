console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Form has been submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

//picture mouseover alert
function Alert(evt){
	//alert(e.target.innerText);
	evt.preventDefault();
	alert('You Got This!');
   };